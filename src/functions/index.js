const functions = require('firebase-functions');
const { Resend } = require('resend');

// Inicializar Resend con la API key (la configuraremos después)
const resend = new Resend(functions.config().resend.key);

// Función que se ejecuta cuando se crea un nuevo documento en 'forms'
exports.notifyNewForm = functions.firestore
  .document('forms/{formId}')
  .onCreate(async (snap, context) => {
    const formData = snap.data();
    const formId = context.params.formId;
    
    // Evitar notificaciones duplicadas si el documento se actualiza
    if (formData.notified === true) {
      console.log('Formulario ya notificado, saltando...');
      return null;
    }

    try {
      // Enviar email
      await resend.emails.send({
        from: 'Formularios <onboarding@resend.dev>', // Dominio gratuito de Resend
        to: ['tu-email@gmail.com'], // ← CAMBIA ESTO POR TU EMAIL
        subject: `📩 Nuevo mensaje de ${formData.name || 'Cliente'}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #4F46E5; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #6B7280; font-size: 12px; text-transform: uppercase; }
              .value { font-size: 16px; margin-top: 5px; }
              .footer { margin-top: 20px; font-size: 12px; color: #9CA3AF; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🚀 Nuevo Formulario Recibido</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Nombre</div>
                  <div class="value">${formData.name || 'No especificado'}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${formData.email || 'No especificado'}</div>
                </div>
                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="value">${formData.message || 'Sin mensaje'}</div>
                </div>
                <div class="field">
                  <div class="label">Fecha</div>
                  <div class="value">${new Date().toLocaleString('es-ES')}</div>
                </div>
                <div class="field">
                  <div class="label">ID del formulario</div>
                  <div class="value" style="font-family: monospace; font-size: 12px;">${formId}</div>
                </div>
              </div>
              <div class="footer">
                <p>Este mensaje fue enviado automáticamente desde tu aplicación.</p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Nuevo formulario de ${formData.name}\nEmail: ${formData.email}\nMensaje: ${formData.message}`
      });

      // Marcar como notificado para evitar duplicados
      await snap.ref.update({ notified: true, notifiedAt: new Date() });
      
      console.log('✅ Email enviado correctamente para formulario:', formId);
      return { success: true };
      
    } catch (error) {
      console.error('❌ Error enviando email:', error);
      // Guardar el error para debug
      await snap.ref.update({ 
        notificationError: error.message,
        notificationAttemptedAt: new Date() 
      });
      throw new functions.https.HttpsError('internal', 'Error enviando notificación');
    }
  });