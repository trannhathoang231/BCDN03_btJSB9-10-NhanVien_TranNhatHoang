const dsnv = new DanhSachNhanVien();
const validation = new Validation();


//Hàm rút gọn cú pháp getElementById
function getELE(id){
    return document.getElementById(id);
}

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiTable(dsnv.mangNV);
    }
}

//Lấy danh sách nv từ local khi load trang web
getLocalStorage();

function themNhanVien(taiKhoan,ten,email,matKhau,ngayLam,luongCB,chucVu,gioLam){
    var taiKhoan = getELE("tknv").value.trim();
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = getELE("gioLam").value;
    // console.log(taiKhoan,ten,email,matKhau,ngayLam,luongCB,chucVu,gioLam);


    //Ket qua kiem tra du lieu
    var isValid = true;

    //Cac buoc kiem tra du lieu
    //?kiem tra taiKhoan
    //!false
    isValid &= validation.kiemTraRong(taiKhoan,"tbTKNV","Tài khoản nhân viên không được để trống!")&&validation.kiemTraTrung(taiKhoan,"tbTKNV","Tài khoản nhân viên không được trùng!",dsnv.mangNV)&&validation.kiemTraTaiKhoan(taiKhoan,"tbTKNV","Tài khoản nhân viên phải từ 4-6 ký tự số!");

    //true
    //?kiem tra tenNV
    isValid &= validation.kiemTraRong(ten,"tbTen","Tên nhân viên không được để trống!") && validation.kiemTraTen(ten,"tbTen","Tên nhân viên phải là chữ!");

    //?kiem tra email
    isValid &= validation.kiemTraRong(email,"tbEmail","Email nhân viên không được để trống!") && validation.kiemTraEmail(email,"tbEmail","Email không đúng định dạng!") ;

    //?kiem tra password
    isValid &= validation.kiemTraRong(matKhau,"tbMatKhau","Mật khẩu nhân viên không được để trống!") && validation.kiemTraPass(matKhau,"tbMatKhau","Mật khẩu không đúng định dạng!") ;

    //?kiem tra ngay lam
    isValid &= validation.kiemTraRong(ngayLam,"tbNgay","Ngày làm không được để trống!") && validation.kiemTraNgayLam(ngayLam,"tbNgay","Ngày làm không đúng định dạng!") ;

    //?kiem tra luong co ban
    isValid &= validation.kiemTraRong(luongCB,"tbLuongCB","Lương cơ bản không được để trống!") && validation.kiemTraLuongCoBan(luongCB,"tbLuongCB","Lương cơ bản phải từ  1 000 000 - 20 000 000 !");

    //?kiem tra chuc vu
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","Chức vụ chưa được chọn!")

    //?kiem tra so gio lam
    isValid &= validation.kiemTraRong(gioLam,"tbGiolam","Số giờ làm không được để trống!") && validation.kiemTraSoGioLam(gioLam,"tbGiolam","Số giờ làm trong tháng phải từ 80 - 200 giờ!") ;

    if(isValid){
        var nv = new NhanVien(taiKhoan,ten,email,matKhau,ngayLam,luongCB,chucVu,gioLam);
        nv.tinhTongLuong();
        nv.xepLoaiNhanVien();
        // console.log(nv);
    
        //thêm nhân viên vào mảng
        dsnv.themNV(nv);
        // console.log(dsnv);
    
        setLocalStorage();
        getLocalStorage();
    
        hienThiTable();
    }

}

function hienThiTable(mang) {
    var content = "";
    mang.map(function(nv,index){
        var trELE = `<tr>
            <td>${nv.taiKhoan}</td>
            <td>${nv.tenNV}</td>
            <td>${nv.email}</td>
            <td>${nv.ngayLam}</td>
            <td>${nv.chucVu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNhanVien}</td>
            <td>
            <button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')" >Xóa</button>
            <button onclick="hienThiChiTiet('${nv.taiKhoan}')" class="btn btn-info" >Xem</button>
            </td>
        </tr>`
        content += trELE;
    });
    getELE("tableDanhSach").innerHTML = content;
}
function xoaNhanVien(id){
    // console.log(id);
    dsnv.xoaNV(id);

    setLocalStorage();
    getLocalStorage();

    hienThiTable();
}

function hienThiChiTiet(id) {
    // tai khoan => index (vi tri)
    console.log(id);
    var viTri = dsnv.timViTri(id);
    if(viTri > -1) {
        // tim thay
    getELE("tknv").value = dsnv.mangNV[viTri].taiKhoan;
    // getELE("tknv").disabled = true;

    getELE("name").value= dsnv.mangNV[viTri].tenNV;
    getELE("email").value= dsnv.mangNV[viTri].email;
    getELE("password").value= dsnv.mangNV[viTri].matKhau;
    getELE("password").type= "text";

    getELE("datepicker").value= dsnv.mangNV[viTri].ngayLam;
    getELE("luongCB").value= dsnv.mangNV[viTri].luongCoBan;
     getELE("chucvu").value= dsnv.mangNV[viTri].chucVu;
    getELE("gioLam").value= dsnv.mangNV[viTri].gioLam;
    }
}

function capNhatNhanVien() {
    //lay thong tin
    var taiKhoan = getELE("tknv").value.trim();
    var ten = getELE("name").value;
    var email = getELE("email").value;
    var matKhau = getELE("password").value;
    var ngayLam = getELE("datepicker").value;
    var luongCB = getELE("luongCB").value;
    var chucVu = getELE("chucvu").value;
    var gioLam = Number(getELE("gioLam").value);

    var nv = new NhanVien(taiKhoan,ten,email,matKhau,ngayLam,luongCB,chucVu,gioLam);
    nv.tinhTongLuong();
    nv.xepLoaiNhanVien();

    dsnv.capNhat(nv);

    setLocalStorage();
    getLocalStorage();
}

getELE("btnTimNV").onclick = function(){
    var loaiTK = getELE("searchName").value;
    var mangTK = [];
    
    mangTK = dsnv.timKiemTheoLoai(loaiTK);
    hienThiTable(mangTK);

}