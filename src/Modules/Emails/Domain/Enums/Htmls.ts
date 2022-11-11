import { TemporalEmail } from '../Models/TemporalEmail';

export const HTML_RESET_PASSWORD = (temporalEmail: TemporalEmail): string => {
	return `<div id="MAIN"
 style="width: 480px;border: 1px solid hsl(0, 0%, 87%); justify-content: center;">
 <div
     style="min-width: 480px; border: 1px solid #dddddd; background-color: #F3F9FF; flex-direction: column; justify-content: center;">
     <div style="padding: 5%; align-items: center; min-height: 50px;">
         <img src="https://www.buengolpe.com/media/aw_sbb/brand/geox_1.jpg" style="object-fit: cover;">
     </div>
     <div
         style="text-align: center; background-color: #FFFFFF; border-radius: 6px; border: 1px solid #DDDDDD; margin: 0px 20px; flex-direction: column; justify-content: center; align-items: center; padding: 10px;">
         <h2 style="color: #424242">Clave de verificación para restablecer contraseña de GENOUX TEST</h2>
         <h5 style="color: #968F89">Ingrese la siguiente clave de verificación para restablecer contraseña,
             cuando sea solicitado:</h5>
         <label style="color: #EB841D; font-size: 1.8em;">${temporalEmail.getTemporalEmail().code}</label>
         <h5>Por favor dirigase a la siguiente ruta e inserte el código</h5>
    
     </div>
     <div style="padding: 5% 5% 0% 5%; text-align: center">
         <div style="justify-content: center; align-items: center;">
             <img src="https://www.buengolpe.com/media/aw_sbb/brand/geox_1.jpg" style="min-height: 40px; min-width: 40px;">
         </div>
     </div>
     <div>
         <h5 style="color: #4C78B3; font-weight: 400; font-size: 0.8em; padding-left: 8%;">Favor no responder
             este correo.</h5>
     </div>
 </div>
</div>`;
};

