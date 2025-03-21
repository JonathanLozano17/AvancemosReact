// src/api/userApi.ts
import {BASE_APIPY} from "../utils/constants"


interface LoginFormData {
    email: string;
    password: string;
  }
  
  export default class UserApi {
    private static BASE_URL = BASE_APIPY; // Aquí coloca tu base URL de la API
  
    // Método para hacer el login
    public static async loginApi(formData: LoginFormData): Promise<string> {
      try {
        console.log(formData);
        console.log("-------------------------------------------------------------------1");

        const url = `${UserApi.BASE_URL}/api/token/`; // URL de la API
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        console.log(formData);
        

        if (!response.ok) {
          throw new Error("Usuario o contraseña incorrectos");
        }
  
        const result = await response.json();
        console.log(result);
        console.log(result.refresh);
        
        return result.refresh; // O lo que sea que devuelva la API en caso de éxito
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Error desconocido");
      }
    }
  }
  