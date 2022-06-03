function DanhSachNhanVien() {
    this.mangNV = [];

    //Method
    this.themNV = function(nv) {
        this.mangNV.push(nv);
    }

    this.timViTri = function(id){
        var viTri = -1;
        this.mangNV.map(function(nv,index){
            if(nv.taiKhoan === id){
                //nếu tìm thấy;
                viTri = index;
            }
        });
        return viTri;
    }

    this.xoaNV = function(id){
        var viTriXoa = this.timViTri(id);
        if(viTriXoa > -1){
            //tim thay
            this.mangNV.splice(viTriXoa,1);
        }
    }

    this.capNhat = function(nv){
        var viTriCapNhat = this.timViTri(nv.taiKhoan);
        if(viTriCapNhat > -1){
            // tim thay
            this.mangNV[viTriCapNhat] = nv;
        }
    }

}


DanhSachNhanVien.prototype.timKiemTheoLoai = function(loaiTK){
    var mangTK = [];
    var loaiThuong = loaiTK.toLowerCase();
    this.mangNV.map(function(nv){
        var loaiNVThuong = nv.loaiNhanVien.toLowerCase();
        if(loaiNVThuong.indexOf(loaiThuong) > -1){
            mangTK.push(nv);
        }
    });

    return mangTK;
    
}