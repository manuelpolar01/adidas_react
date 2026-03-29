import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore/lite'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_hgq7epq'
const TEMPLATE_ID = 'template_xgktefn'
const PUBLIC_KEY = 'I9mjq7uvt7vgsTnJu'

const CheckoutHookForm = () => {

  const [orderId, setOrderId] = useState('')
  const { cart, cartTotal, clear } = useContext(CartContext)
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const finalizarCompra = async (dataDelForm) => {
    console.log("SUBMIT OK", dataDelForm)

    const orden = {
      buyer: {
        name: dataDelForm.name,
        address: dataDelForm.address,
        email: dataDelForm.email
      },
      compras: cart,
      total: cartTotal(),
      date: serverTimestamp()
    }

    const ventas = collection(db, "orders")

    try {
      const res = await addDoc(ventas, orden)
      setOrderId(res.id)
      clear()

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          buyer_name: dataDelForm.name,
          buyer_email: dataDelForm.email,
          buyer_address: dataDelForm.address,
          productos: cart.map(p => `${p.name} x${p.quantity} €${p.price}`).join(', '),
          total: cartTotal(),
          order_id: res.id
        },
        PUBLIC_KEY
      )

      console.log('✅ Email enviado correctamente')

    } catch (error) {
  console.log('❌ Error completo:', JSON.stringify(error))
  console.log('❌ Status:', error.status)
  console.log('❌ Text:', error.text)
}
  }

  return (
    <div>
      {
        orderId
          ? <div>
            <h2>tu orden se genero con exito!</h2>
            <p>su id de seguimiento es: {orderId}</p>
            <Link className='btn btn-dark' to='/'> volver a la home</Link>
          </div>
          : <div>
            <h1>complete con tus datos</h1>
            <form onSubmit={handleSubmit(finalizarCompra)}>
              <input className='form-control' type="text" name='name' placeholder='ingrese su nombre completo' {...register("name", { required: true, minLength: 5 })} />
              {errors?.name?.type === 'required' && <span style={{ color: 'red' }}>por favor complete el campo del nombre</span>}
              {errors?.name?.type === 'minLength' && <span style={{ color: 'red' }}>el nombre debe tener minimo 5 caracteres</span>}

              <input className='form-control' type="text" name='address' placeholder='ingrese su direccion' {...register("address", { required: true, minLength: 5, maxLength: 25 })} />
              {errors?.address?.type === 'required' && <span style={{ color: 'red' }}>por favor complete el campo de la direccion</span>}
              {errors?.address?.type === 'minLength' && <span style={{ color: 'red' }}>la direccion debe tener minimo de 5 caracteres</span>}
              {errors?.address?.type === 'maxLength' && <span style={{ color: 'red' }}>la direccion tener un maximo de 25 caracteres</span>}

              <input className='form-control' type="email" name='email' placeholder='ingrese su correo' {...register("email", { required: true })} />
              {errors?.email?.type === 'required' && <span style={{ color: 'red' }}>por favor complete el campo del correo</span>}

              <input className='form-control' type="email" name='email2' placeholder='ingrese de nuevo su correo' {...register("email2", { required: true, validate: value => value === getValues("email") })} />
              {errors?.email2?.type === 'required' && <span style={{ color: 'red' }}>por favor complete el campo</span>}
              {errors?.email2?.type === 'validate' && <span style={{ color: 'red' }}>los emails deben ser iguales</span>}

              <button className='btn btn-success' type='submit'>finalizar compra</button>
            </form>
          </div>
      }
    </div>
  )
}

export default CheckoutHookForm