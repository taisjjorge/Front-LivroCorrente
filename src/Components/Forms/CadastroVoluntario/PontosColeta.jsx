import { Button, FormControl, Typography, NativeSelect } from '@material-ui/core';
import '../Forms.css';


export default function PontosColeta({aoEnviar}) {
    

    return(
        <>
        <form
            onSubmit={(event) => {
                event.preventDefault();
                    aoEnviar({   });
                }     
            }>
        
            <FormControl className="form" method="POST">
            <br></br>
                    <Typography variant="h6" align="center">
                    Agora vamos cadastrar os principais pontos de coleta para sua atuação
                    </Typography><br></br><br></br>

                    <Typography variant="h7">
                    Selecione o bairro preferencial
                    </Typography>
                    <NativeSelect id="select">
                        <option value="coleta"></option>
                        <option value="coleta">Madureira</option>
                        <option value="coleta">Bonsucesso</option>
                        <option value="coleta">Centro</option>
                        <option value="coleta">Pça XV</option>
                        <option value="coleta">Glória</option>
                        <option value="coleta">Lgo do Machado</option>
                        <option value="coleta">Botafogo</option>
                        <option value="coleta">Jacarepaguá</option>
                        <option value="coleta">Ilha do Governador</option>
                    </NativeSelect><br></br>

                    <Typography variant="h7">
                    Selecione o bairro alternativo (opcional)
                    </Typography>
                    <NativeSelect id="select">
                        <option value="coleta"></option>
                        <option value="coleta">Madureira</option>
                        <option value="coleta">Bonsucesso</option>
                        <option value="coleta">Centro</option>
                        <option value="coleta">Pça XV</option>
                        <option value="coleta">Glória</option>
                        <option value="coleta">Lgo do Machado</option>
                        <option value="coleta">Botafogo</option>
                        <option value="coleta">Jacarepaguá</option>
                        <option value="coleta">Ilha do Governador</option>
                    </NativeSelect><br></br>


                    <Button color="primary" active type="submit">Finalizar</Button>
                
            </FormControl>
            </form>
        </>
    )
}