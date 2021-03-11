module.exports = function toReadable (number) {
        var fraction = Math.round(frac(number)*100);
        var f_text  = "";
    
        if(fraction > 0) {
            f_text = convert_number(fraction)+" PAISE";
        }
    
        return convert_number(number)+f_text;
    }
    
    function frac(f) {
        return f % 1;
    }
    
    function convert_number(numberD)
    {
        if ((numberD < 0) || (numberD > 999999999)) 
        { 
            return "NUMBER OUT OF RANGE!";
        }
        var Dn = Math.floor(numberD / 100);       /* Tens (deca) */ 
        numberD = numberD % 100;               /* Ones */ 
        var tn= Math.floor(numberD / 10); 
        var one=Math.floor(numberD % 10); 
        var res = ""; 
    
            
        if (Dn) 
        { 
            res += (((res=="") ? "" : " ") + 
                convert_number(Dn) + " hundred"); 
        } 
    
    
        var ones = Array("", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', "ten", "eleven", "twelve", "thirteen","fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen"); 
    var tens = Array("", "", 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'); 
    
        if (tn>0 || one>0) 
        { 
            if (!(res=="")) 
            { 
                res += " "; 
            } 
            if (tn < 2) 
            { 
                res += ones[tn * 10 + one]; 
            } 
            else 
            { 
    
                res += tens[tn];
                if (one>0) 
                { 
                    res += (" " + ones[one]); 
                } 
            } 
        }
    
        if (res=="")
        { 
            res = "zero"; 
        } 
        return res;
    }
