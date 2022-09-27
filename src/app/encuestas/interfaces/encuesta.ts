export interface Encuesta {
  id? :string;
  id_administrador? :string;
  id_comunidad? :string;
  idAplicacion? :string;
  descripcion? :string;
  estado? :string;
  tipo? :string;
  formulario_json? :string;
  fecha? :string;
  tipo_respuesta? :string;
  emil_respuesta? :string;
  endpoint_respuesta? :string;
  id_programa? :string;
}
export interface EncuestaExt extends Encuesta {

  nombre_comco? :string;
  nombread? :string;
  totalencuestas? :string;
  verEncuestas?:boolean
}
