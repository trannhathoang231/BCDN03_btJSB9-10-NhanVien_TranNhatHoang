function NhanVien(taiKhoan,ten,email,matKhau,ngayLam,luongCB,chucVu,gioLam) 
{
    this.taiKhoan = taiKhoan;
    this.tenNV = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.loaiNhanVien = "";
    //Method
    this.tinhTongLuong = function(){
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = this.luongCoBan*3 ;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCoBan*2 ;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCoBan;
                break;   
        }
    }
    this.xepLoaiNhanVien = function(){
        if(this.gioLam >=192){
            this.loaiNhanVien = "xuất sắc";
        }else if(this.gioLam >=176){
            this.loaiNhanVien = "giỏi";
        }else if(this.gioLam >=160){
            this.loaiNhanVien = "khá";
        }else{
            this.loaiNhanVien = "trung bình";
        }
    }
    
}