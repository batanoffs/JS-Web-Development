/* 
  FUNCTIONAL PROGRAMING
  ------------------------------------------------------------------------------------
  1) HIGH-OREDER FUNCTIONS
  фунцкия от по висок ред - деференциал, на която подаваме друга и връща трета функция
  Examples build-In functions in JS: */
    array.prototype.map;
    array.prototype.filter;
    array.prototype.reduce;
 /*   
  2) PREDICATE - function that returns true/false;

  3) PURE FUNCTIONS (common interview question, best practice)
      Returns same result if given same parameters */
      
      // impure function:  
      let num = 1;
      const increment = () => num +=1;
      increment(); //2

      // pure function:
      const increment2 = n => n+1;
      increment2(1); //2
      increment2(1); //2

 /*
  4) REFERENTAL TRASPERENCY - Тясно свързано с PURE FUNCTIONS. Eдна функ. може да я подменим в кода с резултата, който тя връща без това да промени състоянието на програмата;


  5) CLOSURE - ONE OF THE MOST IMPORTANT FEATURES (common interview question, fundamental technique)
  
      STACK(primitives variables)  |    HEAP (referent variables)
  --------------------------------------------------------------------------
                    variable = a   |    reference to variable a   
                                   |          
                                   |    local scope 
                                   |    ---------------
                                   |    |     a       |
             function x(a,b);      |    |      b      |
                                   |    ---------------     
                                   |    CLOSURE     
                                   |    --------------
                                   |    |            |
                                   |    |            |
                                   |    --------------    
                                   |          
              global object   --------> reference to global object
              this -------------------> reference to this
*/