function Validation() {
    this.kiemTraRong = function(value,spanID,message) {
        if(value.trim() === ""){
            //khong hop le
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //hop le
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.kiemTraTrung = function (value,spanID,message, mangNV){
        var isExist = mangNV.some(function(nv){
            return value === nv.taiKhoan;
        });

        if(isExist){
            //co sv bi trung ma
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //hop le
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.kiemTraTaiKhoan = function(value,spanID,message){
        var pattern = /^[0-9]{4,6}$/
        // value.match(pattern) => true
        if(value.match(pattern)){
            //giá trị đúng với biểu mẫu    
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;

    }

    this.kiemTraTen = function(value,spanID,message){
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
        // value.match(pattern) => true
        if(value.match(pattern)){
            //giá trị đúng với biểu mẫu    
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

            //không hợp lệ
            document.getElementById(spanID).innerHTML = message;
            document.getElementById(spanID).style.display = "block";
            return false;

    }
    this.kiemTraEmail = function(value,spanID,message) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(value.match(pattern)){
            //đúng với biểu mẫu
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.kiemTraPass = function(value,spanID,message){
        // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{min,max}$/;
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(value.match(pattern)){
            //đúng với biểu mẫu
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;

        }

        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.kiemTraNgayLam = function(value,spanID,message) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

        if(value.match(pattern)){
            //đúng với biểu mẫu
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.kiemTraLuongCoBan = function(value,spanID,message) {
        var pattern = /^(100000\d|10000[1-9]\d|1000[1-9]\d{2}|100[1-9]\d{3}|10[1-9]\d{4}|1[1-9]\d{5}|[2-9]\d{6}|1\d{7}|20000000)$/;

        if(value.match(pattern)){
            //đúng với biểu mẫu
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.kiemTraChucVu = function(selectID,spanID,message){
        var optionIndex = document.getElementById(selectID).selectedIndex;
        if(optionIndex !== 0){
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.kiemTraSoGioLam = function(value,spanID,message) {
        var pattern = /^(8\d|9\d|1\d{2}|200)$/;

        if(value.match(pattern)){
            //đúng với biểu mẫu
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //không hợp lệ
        document.getElementById(spanID).innerHTML = message;
        document.getElementById(spanID).style.display = "block";
        return false;

    }
}