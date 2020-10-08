var app = new Vue({
    el: '#app',
    data: {
        arrayDatos: [],

        met:0,
        tipo:0,

        arrayDate:[],

        totalPro1:0,
        contro1:0, 
        totalPro2:0,
        contro2:0,
        totalPro3:0,
        contro3:0,
        tAll:0,
        totalFact:0,
        contro4:0,
        totalFact1:0,
        contro5:0, 
        totalFact2:0,
        contro6:0,      
        tF1:0,
        totalE7:0,
        totalE8:0,
        totalE9:0,
        contro7:0, 
        contro8:0, 
        contro9:0,         
    },

    methods: {
        procesarDatos: function () {

            if(this.met >= 0 && this.met <= 999999999){
                if (this.tipo =="1") {

                    this.fijo = 2300;
                    this.sub = 920;
                    this.cubic = 250;

                    this.rta = this.met * this.cubic + this.fijo - this.sub;
                    //PROMEDIO METROS
                    this.totalPro1 = this.totalPro1 + parseInt(this.met);
                    this.contro1 ++;
                    //TOTAL FACTURADO POR ESTRATO
                    this.totalFact = this.totalFact + parseInt(this.rta);
                    this.contro4 ++;
                    //TOTAL FACTURADO TODOS LOS ESTRATOS
                    this.totalE7 = this.totalE7 + parseInt(this.rta);
                    this.contro7 ++;
                                                
                    this.arrayDatos.push({ totalS: this.sub, totalF: this.rta, tM:this.met, tE:this.tipo})                    
                }        

                if (this.tipo =="2") {

                    this.fijo = 3200;
                    this.sub = 960;
                    this.cubic = 350;

                    this.rta = this.met * this.cubic + this.fijo - this.sub;
                    //PROMEDIO METROS
                    this.totalPro2 = this.totalPro2 + parseInt(this.met);
                    this.contro2 ++;
                    //TOTAL FACTURADO POR ESTRATO
                    this.totalFact1 = this.totalFact1 + parseInt(this.rta);
                    this.contro5 ++;
                    //TOTAL FACTURADO TODOS LOS ESTRATOS
                    this.totalE8 = this.totalE8 + parseInt(this.rta);
                    this.contro8 ++;
                                                
                    this.arrayDatos.push({ totalS: this.sub, totalF: this.rta, tM:this.met, tE:this.tipo}) 
                    
                }
        
                if (this.tipo =="3") {

                    this.fijo = 3900;
                    this.sub = 390;
                    this.cubic = 460;

                    this.rta = this.met * this.cubic + this.fijo - this.sub;

                    //PROMEDIO METROS
                    this.totalPro3 = this.totalPro3 + parseInt(this.met);
                    this.contro3 ++;
                    //TOTAL FACTURADO POR ESTRATO
                    this.totalFact2 = this.totalFact2 + parseInt(this.rta);
                    this.contro6 ++;
                    //TOTAL FACTURADO TODOS LOS ESTRATOS
                    this.totalE9 = this.totalE9 + parseInt(this.rta);
                    this.contro9 ++;
                                                
                    this.arrayDatos.push({ totalS: this.sub, totalF: this.rta, tM:this.met, tE:this.tipo})                                              
                }            
            }else{
                Swal.fire({
                    title: 'Datos incorrectos!',
                    text: 'Metros Cúbicos no validos',
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            }                             
                // <<<<<< P R O M E D I O S >>>>>>
        },
        procesarDate: function(){ 
                       
            //PROMEDIO METROS 1

            this.tPr= parseInt(this.totalPro1);             
            this.tCtr= parseInt(this.contro1);
            this.mT1= parseInt(this.tPr)/parseInt(this.tCtr);
            //PROMEDIO METROS 2
            this.tPr2= parseInt(this.totalPro2);             
            this.tCtr2= parseInt(this.contro2);
            this.mT2= parseInt(this.tPr2)/parseInt(this.tCtr2);

            //PROMEDIO METROS 3
            this.tPr3= parseInt(this.totalPro3);             
            this.tCtr3= parseInt(this.contro3);
            this.mT3= parseInt(this.tPr3)/parseInt(this.tCtr3);
            
            //FACTURADO ESTRATO 1
            this.tF1 = parseInt(this.totalFact);
            //FACTURADO ESTRATO 2
            this.tF2 = parseInt(this.totalFact1);
            //FACTURADO ESTRATO 3
            this.tF3 = parseInt(this.totalFact2);
            //TOTAL TODOS LOS ESTRATOS
            this.toE = parseInt(this.totalE7) + parseInt(this.totalE8) + parseInt(this.totalE9);            

            this.arrayDate.splice(0);

            this.arrayDate.push({ m1:this.mT1, m2:this.mT2, m3:this.mT3,  e1:this.tF1, e2:this.tF2, e3:this.tF3,
            totalFc:this.toE})                                          
        }
    }         
})