import logo from './logo.svg';
import './App.css';
const danhsachTro=[
  {
    "title": "CHO THUÊ PHÒNG MỚI 100%, 50m2, FULL NỘI THẤT CAO CẤP, SÁT CHỢ, AN NINH 24/24. 0903 62 1992",
    "thumbnail": "https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/08/03/z2007085821510-1c5f88e7607b8437fadb01dc77adf5ab_1596463424.jpg",
    "price": 4500000,
    "area": 50,
    "city": "79",
    "district": "778",
    "content": "* Cho thuê phòng trọ cao cấp mới 100%, 50m2, ngay chợ, đầy đủ nội thất cao cấp, có chỗ nấu ăn trong phòng, wifi và giữ xe miễn phí, giờ giấc tự do, camera"
  },
  {
    "title": "PHÒNG ĐẸP, ĐẦY ĐỦ NỘI THẤT, KHU VỰC VĂN MINH, GIÁP Q1,2, VINHOMES CENTRAL PARK",
    "thumbnail": "https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/03/11/57036d98-45ed-42a7-af1b-ab1d28550585_1583927710.jpg",
    "price": 5000000,
    "area": 40,
    "city": "79",
    "district": "765",
    "content": "địa chỉ: 118/29 bạch đằng, phường 24, quận bình thạnh, tp. hồ chí minh. liên hệ anh dũng 087.966.9702chỉ 5 triệu/tháng ( siêu khuyến mãi) bạn sẽ sở hữu"
  },
  {
    "title": "Cho thuê căn hộ mini cao cấp full nội thất chỉ với 2.9tr/tháng tại Quận 7. LH: 0986643968",
    "thumbnail": "https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/06/25/phong-tro-mini-cao-cap-3_1593095112.jpg",
    "price": 2950000,
    "area": 25,
    "city": "79",
    "district": "778",
    "content": "cho thuê căn hộ mini cao cấp 1115/76 huỳnh tấn phát, p.phú thuận, q.7, tp. hồ chí minh- căn hộ mới xây, sạch sẽ, thoáng mát, tiện nghi, rất tiện lợi di"
  },
  {
    "title": " Cho thuê nhà cấp 4 khép kín ngõ rộng oto ra vào ",
    "thumbnail": "https://static123.com/phongtro123/uploads/images/thumbs/450x300/fit/2020/07/06/dsc-00931_1594003802.jpg",
    "price": 3000000,
    "area": 35,
    "city": "01",
    "district": "004",
    "content": "nhà trọ phố thành đạt - tp. hcm nhà trọ dạng chung cư mini 100 phònggiờ giấc hoàn toàn tự do - không chung chủ - có sẵn nội thất - có gác - mớ"
  }
]

function App() {
  return (
    <div>
      <TimTro dST={danhsachTro}></TimTro>
      
    </div>
  );
}

export default App;
