

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
const foo = (x: number) => x + 1;
//////////////////////////////////////////////////////////////////////////////////////
export const procesaError = (error: any): string => {
  if (error.message) {
    return  error.message;
  }
  if (error.msj) {
    return  error.msj;
  }
  return 'error general';
};
//////////////////////////////////////////////////////////////////////////////////////
export const esVacia = (elemento: any): boolean => {

  if ((elemento === null) ||  (elemento === undefined)) {
     return true;
   };
  if (typeof(elemento) === 'string') {
    if (elemento.trim().length === 0 ) {
      return true;
    }
  }

   return false;

};
//////////////////////////////////////////////////////////////////////////////////////

export const sonIguales = (elemento1: any,elemento2: any): boolean => {

  if (esVacia(elemento1) &&  esVacia(elemento2)) {
     return true;
   };
   if (esVacia(elemento1) &&  !esVacia(elemento2)) {
    return false;
  };
  if (!esVacia(elemento1) &&  esVacia(elemento2)) {
    return false;
  };
  if(elemento1 === elemento2){
    return true;
  }
 return false;

};
//////////////////////////////////////////////////////////////////////////////////////
 export const dameUrlNav = (pcrutapadre: string ,pcrutahija: string): string =>
 {
  const ruta = pcrutapadre.split(';')[0] + pcrutahija;
  return ruta;
 };
//////////////////////////////////////////////////////////////////////////////////////
 export const formatDateMysql = (date: Date): string =>
 {
  const d = new Date(date);
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) {
      month = '0' + month;
   };
  if (day.length < 2) {
      day = '0' + day;
  };

  return [year, month, day].join('-');
};
//////////////////////////////////////////////////////////////////////////////////////
export const formatTimeMysql = (date: Date): string =>
 {
  //const pipe = new DatePipe('es-ES');
  const d = new Date(date);
  const hora = '' + d.getHours();
  const minutos = '' + d.getMinutes();
  //return pipe.transform(date,'hh:mm:ss');
  return [hora, minutos].join(':');
};
//////////////////////////////////////////////////////////////////////////////////////
export const formatDateTimeMysql = (date: Date): string =>
 formatDateMysql(date) + ' ' + formatTimeMysql(date);

export const ajustaFincasPlus = (dato: any): string =>{

  if (!dato) {
    return '';
  }
  else {
    return '' + dato + '';
  }
};
//////////////////////////////////////////////////////////////////////////////////////
 export const modulo = ( divident:any, divisor:number ) => {
    const  partLength = 10;

    while (divident.length > partLength) {
        const part = divident.substring(0, partLength);
        divident = (part % divisor) +  divident.substring(partLength);
    }

    return divident % divisor;
};

//////////////////////////////////////////////////////////////////////////////////////
  export const  calculoIBAN = ( accountBank:string ): string => {


    if (!/^\d{20}$/.test(accountBank)) {
      return '';
    }


    const countryCode   = 'ES';
    const     countryNumber = '142800';
    let    iban	  = '';
    let     digitControl ;

    const ccc = accountBank.toString() + countryNumber;

    digitControl = 98 - modulo( ccc, 97 );
    if( digitControl < 10 ) {
      digitControl = '0' + digitControl;
    }

    iban = countryCode + digitControl;
    return iban;
  };
///////////////////////////////////////
export const  DameDiaSemanaLetra = (d: Date,n: number = -1) => {
  const dias = new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado');
  if (n >= 0) {
    return dias[n];
  }
  return dias[d.getDay()];
  };
 ///////////////////////////////////////
  export const  DameMesLetra = (d: Date) => {
   const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'
                          , 'Septiembre' , 'Octubre', 'Noviembre', 'Diciembre');
   return meses[d.getMonth()];
   };


