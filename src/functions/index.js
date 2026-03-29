exports.notifyNewOrder = functions.firestore
  .document('orders/{orderId}')
  .onCreate(async (snap, context) => {
    const order = snap.data();
    const orderId = context.params.orderId;

    if (order.notified === true) return null;

    try {
      await resend.emails.send({
        from: 'Tienda <onboarding@resend.dev>',
        to: ['paragiliar1@hotmail.com'], // ← tu email de admin
        subject: `🛒 Nueva orden #${orderId}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #111; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
              <h2>🛒 Nueva Orden Recibida</h2>
            </div>
            <div style="background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px;">
              
              <h3>👤 Datos del comprador</h3>
              <p><strong>Nombre:</strong> ${order.buyer.name}</p>
              <p><strong>Email:</strong> ${order.buyer.email}</p>
              <p><strong>Dirección:</strong> ${order.buyer.address}</p>

              <h3>🛍️ Productos</h3>
              <table style="width:100%; border-collapse: collapse;">
                <thead>
                  <tr style="background: #e5e7eb;">
                    <th style="padding: 8px; text-align:left;">Producto</th>
                    <th style="padding: 8px; text-align:left;">Talla</th>
                    <th style="padding: 8px; text-align:left;">Cantidad</th>
                    <th style="padding: 8px; text-align:left;">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  ${order.compras.map(p => `
                    <tr style="border-bottom: 1px solid #e5e7eb;">
                      <td style="padding: 8px;">${p.name}</td>
                      <td style="padding: 8px;">${p.size || '-'}</td>
                      <td style="padding: 8px;">${p.quantity}</td>
                      <td style="padding: 8px;">€${p.price}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>

              <p style="font-size: 18px; font-weight: bold; text-align: right; margin-top: 10px;">
                Total: €${order.total}
              </p>

              <p style="color: #9CA3AF; font-size: 12px;">ID de orden: ${orderId}</p>
            </div>
          </div>
        `,
        text: `Nueva orden de ${order.buyer.name} | Email: ${order.buyer.email} | Total: €${order.total}`
      });

      await snap.ref.update({ notified: true, notifiedAt: new Date() });
      console.log('✅ Email de admin enviado para orden:', orderId);
      return { success: true };

    } catch (error) {
      console.error('❌ Error:', error);
      await snap.ref.update({ notificationError: error.message });
      throw new functions.https.HttpsError('internal', 'Error enviando email');
    }
  });