export interface Response {
    DatosUsuario?: DatosUsuario;
    Token?:        string;
    Ok:           string;
}

export interface DatosUsuario {
    Nombre?:          string;
    ApellidoPaterno?: string;
    ApellidoMaterno?: string;
    
}
