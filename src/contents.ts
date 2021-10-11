export enum ContentStatus {
  UNRELEASED = "UNRELEASED", // 출시전
  RELEASE = "RELEASE", // 출시
  COMPLETED = "COMPLETED", // 완결
}

export interface Episode {
  id: string;
  title: string;
  price: number;
  novel: string; // story => novel
  isFree: boolean;
  isBuy: boolean;
}
export interface Content {
  id: string;
  title: string;
  image: string;
  like: number;
  summary: string;
  status: ContentStatus;
  episodes: Episode[];
}

// interface와 contents를 연결해준다!
const contents: Content[] = [
  {
    id: "0262163d-e4bc-4b76-bbfd-d4bb65f96d31",
    title: "Ý TƯƠNG TƯ MÀ TÔI TỪNG CHÔN SÂU",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image1.jpg",
    like: 93,
    status: ContentStatus.RELEASE,
    summary:
      "Câu nói sáo của hắn vẫn luôn là cô chết đi là tốt nhất. Mà khi cô nằm ở trong bồn tắm, máu chảy đầm đìa mà lấy ra một đôi song sinh xong, liền chết rồi, một trái tim của hắn cũng đã nát rồi.",
    episodes: [
      {
        id: "4157993e-e655-4710-b53a-edc82f7d3906",
        title: "Episode1",
        price: 3,
        novel: `Không khéo là, chiếc xe đụng cô chính là gái hồng lâu nổi tiếng của thành phố này, gái hồng lâu đã nhận ra cô, nghe Hoắc Viễn Phàm nói như vậy, khóe miệng khinh miệt mà nhếch lên, "Hoắc phu nhân nghe thấy chưa? Hoắc thiếu gia nói cô chưa chết cũng đừng làm phiền ngài ấy, được rồi, thì như vậy, bye bye ~ "
				Ngay cả một người ngoài không có quen biết, đều ỷ vào Hoắc Viễn Phàm đối với cô lạnh lùng và tàn nhẫn mà coi thường cô.
				"Con ——" Cô một tay bụm lấy phần bụng đau nhức, một tay run rẩy mà lấy ra điện thoại chuẩn bị gọi 120, ai ngờ xe của cô đùng một cái lại bị đụng ra ngoài mấy mét, điện thoại rơi xuống, cả người của cô ngã trái ngã phải, chỉ dựa vào dây an toàn mà cố định lấy.
				Cuối cùng cũng dừng lại.
				"Tiêu Xán ——" Tiếng nói của Hoắc Viễn Phàm, u ám mà truyền tới.
				Cô nghiêng đầu, cửa sổ của xe nữa hạ xuống, lộ ra mặt mày anh tuấn vô cùng lạnh nhạt của Hoắc Viễn Phàm, trợn to đôi mắt xinh đẹp, hắn lại có thể lái xe đụng mình?
				Hắn biết rõ cô vừa mới bị đụng.
				"Ni Ni đã trở về rồi, tôi sớm đến chào hỏi với cô, cho cô chuẩn bị tốt đón chào em ấy, nếu làm cho em ấy mất hứng rồi, thì còn nhiều khổ cho cô chịu." Lạnh lùng mà cảnh cáo xong, không chút nào quan tâm đến sống chết của cô, tuyệt tình mà bỏ đi.
				Đầu ngón tay của Tiêu Xán nắm thật chặt, mồ hôi lạnh từ trên trán rơi xuống.
				Cách thức chào hỏi của hắn chính là lái xe đụng cô?`,
        isFree: true,
        isBuy: true,
      },
      {
        id: "43fbd23f-f96c-4036-9ad7-0d799f7b4572",
        title: "Episode2",
        price: 3,
        novel: `Đầu lưỡi của Tiêu Xán gắt gao mà chống vào sau răng cấm, kỳ lạ là, lúc này trong đầu lại có thể thoáng hiện mọi chuyện quá khứ của cô và Hoắc Viễn Phàm, khi đó thật là tốt đẹp đến nổi khiến lòng người rung động.
				Cho đến một ngày kia, người bạn cực kỳ thân của cô - Kiều Ni Ni ở nhờ ở nhà bọn họ, nửa đêm đột nhiên khóc la, nói là cha của cô đã cưỡng hiếp cô ấy, từ sau hôm đó, mọi thứ liền đều thay đổi rồi.
				Toàn diện bùng nổ tin tức xấu về chủ tịch Tiêu thị xâm hại tình dục, làm cho cổ phiếu của Tiêu thị xuống dốc không phanh, cha của cô bị nhiều kênh truyền thông công khai chinh phạt khiển trách, cuối cùng không chịu nổi áp lực mà nhảy lầu tự sát, và mẹ của cô, sau đó cũng tuẫn tình ở bên cạnh.
				Trong một đêm, cô từ đại tiểu thư cao cao tại thượng, biến thành con gái của người phạm tội cưỡng hiếp bị người nhạo báng chửi rủa.
				Nhưng sự thật không phải là như thế!
				Cha của cô –Tiêu Minh là bị Kiều Ni Ni đổ oan đấy, Kiều Ni Ni hoàn toàn là vu oan giá họa!`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "45654b43-386d-42bd-86f4-cc7c819b7d71",
        title: "Episode3",
        price: 3,
        novel: `Thế nhưng là không ai tin cô, cho dù là Hoắc Viễn Phàm cùng cô cùng nhau lớn lên cũng không tin cô!
				Còn chưa đợi cô phản ứng, cánh tay bị kéo lấy, cô bị nài ép lôi kéo mà đưa lại về nhà.
				Hai ngày không về, trong nhà nghiễm nhiên là thay đổi lớn, rất có khuynh hướng thay hình đổi dạng.
				Kiều Ni Ni thoải thoải mái mái mà nằm trên ghế sa lon ăn quả anh đào mới được đưa ra thị trường, nhìn thấy Tiêu Xán, khuôn mặt cứng đờ lại, lập tức sợ hãi mà ngồi thẳng người nhìn cô, "Xán Xán —— "
				Cô ấy đứng dậy chạy đến sau lưng của Hoắc Viễn Phàm, nắm chặt bàn tay lớn của hắn, chớp nháy đôi mắt nai long lanh nước mắt, sợ hãi cảnh giác mà nhìn chằm chằm vào Tiêu Xán.
				Hoắc Viễn Phàm thấy bộ dạng này của cô ấy đau lòng đến tột cùng, "Ni Ni đừng sợ, trong nhà này, Tiêu Xán sẽ là người hầu của em, em có thể tùy ý sai khiến cô ấy, cô ấy không dám làm khó em như thế sao đâu."`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "4dba86de-166d-4a94-9b44-c2f494b9ab70",
        title: "Episode4",
        price: 3,
        novel: `Tiêu Xán đồi bại mà lắc đầu, "Tôi không có, tôi cùng Đỗ Trạch với nhau là vì..." Tìm chứng cứ của Kiều Ni Ni hại chết cha mẹ của tôi.
				Nửa câu sau, không có nói ra miệng.
				Với thiên tín và nuông chiều của Hoắc Viễn Phàm đối với Kiều Ni Ni, nói rồi chỉ sẽ làm hắn càng thêm căm hận chán ghét mình thôi.
				"Nói không được nữa rồi?" Ngữ khí của Hoắc Viễn Phàm, vô cùng gắt gỏng, đôi mắt như mũi tên nhọn đâm ngược lại, hung dữ mà đục vào Tiêu Xán, "Sinh hạ đứa bé, mặc kệ có phải là con của tôi, đều sẽ giao cho Ni Ni nuôi."
				Tiêu Xán không dám tin nổi, không khỏi xù lông, "Hoắc Viễn Phàm, đứa con"`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "5196d4ce-87a0-46de-9ada-95317d32f7dd",
        title: "Episode5",
        price: 3,
        novel: `Nhưng sự thật hoàn toàn là trái ngược nhau.
				"Kiều Ni Ni, cô hại chết cha mẹ của tôi, buổi tối đi ngủ không sợ bọn họ tới tìm cô lấy mạng sao?"
				Kiều Ni Ni hất môi mà cười, "Cái này thì không cần cô phải quan tâm rồi, cô vẫn là quan tâm bản thân mình đi."
				Nói xong, cô ấy đột nhiên quỷ dị mà cười, kéo Tiêu Xán đi đến ban công, sắc mặt của Tiêu Xán căng thẳng, "Kiều Ni Ni cô muốn làm gì?"
				"Cô không phải không đồng ý ly hôn sao? Tôi đợi tí nữa liền khiến cho cô thay đổi chủ ý."
				Chẳng biết lúc nào bầu trời đã âm u, một đường tia chớp lướt qua, sáng loáng soi sáng khuôn mặt điên cuồng của Kiều Ni Ni.
				Thân thể của Tiêu Xán yếu ớt lại mang cái bụng lớn, hoàn toàn không có cách nào đẩy Kiều Ni Ni ra.
				Trong giãy giụa, đã bị cô ấy kéo đến méo ban công, cô ấy mở ra cửa sổ, lạnh lùng nắm chặt tay của cô, "Tiêu Xán, cô đi chết đi."
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "03688e17-e650-4651-8e47-b4f304141ef2",
    title: "SƠN THỦY NHẤT TRÌNH",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image2.png",
    like: 134,
    status: ContentStatus.RELEASE,
    summary:
      "Có người sẽ mất ngủ,  Có người sẽ say sưa, Có người than khóc suốt đêm dài, Có người độc bước trên đường vắng trong đêm tối,",
    episodes: [
      {
        id: "5c9a7625-3897-466e-bea0-71805ba6f7c6",
        title: "Episode1",
        price: 3,
        novel: `Giọng Jessie có hơi nôn nóng: “Xe đã dừng đợi chị sẵn rồi, chị đi ra là có người tới đón… Đau dài không bằng đau ngắn, chị ráng chạy mấy bước lên được xe là tốt rồi…”
				Khương Nghê ngó những cái đầu nhấp nhô không sao phân nổi ngoài kia chăm chú, bàn tay cầm điện thoại siết hơn, thở dài, kéo mở cánh cửa kính.
				Không ngoài dự đoán, đám đông ngoài cánh cổng sắt bắt đầu sôi trào, ánh đèn flash chớp lóe trông rõ mồn một kể cả dưới nắng gắt.
				Cánh cổng lưới sắt mở. Tuy đã có hai bảo vệ cản lại, cánh nhà báo vẫn chen vào lúc nhúc.
				Một nữ phóng viên nhanh tay lẹ mắt bỗng loáng dí micro vào dưới mũi Khương Nghê, gân giọng hỏi thật nhanh: “Cô Khương Nghê, trải qua chuyện lần này, cô sẽ rời khỏi làng giải trí chứ?”
				Khương Nghê cau mày, kéo thấp vành nón, chỉ muốn chen ra khỏi đám đông.
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "610e2b37-0610-4bcb-af2c-1869bef8acff",
        title: "Episode2",
        price: 3,
        novel: `Ánh đèn flash và những âm thanh nhức óc khiến cô bực dọc lạ thường trong tiết cuối hè. Không biết bị ai đẩy mà trọng tâm của cô bỗng hơi hẫng, nhưng ngay giây sau đã được một cánh tay mạnh mẽ ôm vòng qua eo, kế đó một chiếc áo khoác đen kịt phủ trùm trên đầu. Mùi xà phòng thoang thoảng ập tới. Ánh mắt cô chìm trong bóng đen. Nhưng có thể cảm nhận được một sức mạnh vô hình đang đẩy cô bước tới trước. Trong tình cảnh rối ren, sức mạnh ấy vững khỏe mà lại im ắng, âm thanh bên tai cô mỗi lúc một nhỏ dần, mãi đến khi mất hút.`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "6a510852-79c6-451e-b797-3742b10c3d7c",
        title: "Episode3",
        price: 3,
        novel: `Khương Nghê đã thay cái sơ mi trắng, đường cắt may tuyệt hảo tôn rõ đường cong của cô.
				Cảnh Diệc cầm mirco, hội trường chuyển về yên tĩnh: “Chào mọi người, tôi là giám đốc điều hành của tập đoàn RJ, Cảnh Diệc. Hôm nay và ở đây, chúng ta sẽ có buổi họp báo về sự việc hít ma túy của nghệ sĩ Khương Nghệ thuộc quyền quản lý của công ty giải trí RJ.”
				Ánh mắt hắn lia sang Khương Nghê. Cô cầm mirco, thong thả mất một chốc mới nói: “Chào mọi người, tôi là Khương Nghê.”
				Khương Nghê vừa dứt lời, phía dưới đã có phóng viên đột ngột đứng bật dậy, giọng hỏi dồn: “Cô Khương Nghê, bên cảnh sát nói cô không nghiện ma túy, đúng là vậy chứ?
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "6afaa268-8d43-4015-8016-a35418593db6",
        title: "Episode4",
        price: 3,
        novel: `Hội trường im phắc, chỉ độc tiếng màn trập lác đác.
				Khương Nghê kề sát mirco, giọng đều đều: “Đúng vậy.”
				Tất cả cùng chờ đợi lời kế tiếp, nhưng Khương Nghê không hề có ý định giải thích.
				“Là như thế này.” Cảnh Diệc nối lời, trong lúc lơ đễnh có liếc qua gương mặt lạnh tanh của Khương Nghê, “Hôm ấy đúng là cô Khương Nghê đã tự buông thả, nhưng đó cũng là lần đầu tiên cô ấy tiếp xúc với ma túy, chưa từng có tiền án. Nhưng trùng hợp đúng lúc cảnh sát đột kích kiểm tra bị phát hiện… Ở đây có lời làm chứng của đồng chí cảnh sát liên quan, mọi người có thể tham khảo.”
				Cảnh Diệc ấn vào một nút bấm, màn hình led đằng sau xuất hiện một cảnh sát đang chào theo tư thế nghiêm. Cánh nhà báo bên dưới ào ào ngước đầu lên nhìn.
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "05a645cd-0ca2-4298-bfa3-84f28b6d0df7",
    title: "KHI GIÓ LẠI THỔI",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image10.jpg",
    like: 342,
    status: ContentStatus.RELEASE,
    summary: `Truyện Khi Gió Lại Thổi của tác giả Tiểu Lộ Đăng kể về Lý Ninh Ngọc là một người đặc biệt trong lòng Cố Hiểu Mộng.
Vì chị ấy, cô tiến vào nơi đây, cô trở thành hán gian, cô điên cuồng tìm kiếm mọi cách để biết được thi thể của Lý Ninh Ngọc ở đâu.`,
    episodes: [
      {
        id: "6c2a84c7-a72a-4977-b052-04f5172624b8",
        title: "Episode1",
        price: 3,
        novel: `Bên trong tầng hầm âm u đáng sợ, Vương Điền Hương bị trói ở cột trụ trung tâm không thể nhúc nhích, một luồng sáng trắng nhức mắt xuyên thấu qua ao nước trên trần nhà chiếu thẳng xuống, làm hắn không mở mắt ra được.
				Đúng là phong thủy luân lưu chuyển*, tiểu cô nương Cố Hiểu Mộng này, một năm trước vẫn còn là dê con đợi làm thịt trong Cầu Trang, mới qua thời gian không bao lâu, không chỉ thăng quan lên làm Sở trưởng Sở Cơ Yếu, còn điều tra thẩm vấn đến cả hắn rồi.
				Vương Điền Hương hắn ngày trước ở trước mặt gã quỷ tử Ryukawa kia bảo vệ cô ta đủ đường, một chút đau khổ da thịt cũng không để cô ta phải chịu, nhưng cô ta thì hay rồi, ân đền oán trả!
				(*) phong thủy luân lưu chuyển: ý chỉ đời lúc lên lúc xuống, quả táo nhãn lồng.
				`,
        isFree: true,
        isBuy: true,
      },
      {
        id: "6caa3c9e-056e-4961-b04e-c87d5e9903d5",
        title: "Episode2",
        price: 3,
        novel: `"Được, Cố thiếu tá! Chúng ta cộng sự lâu như vậy, cũng coi như người quen cũ, cô cảm thấy Đới Lạp có thể coi trọng thứ người như tôi sao?" Vương Điền Hương nhếch mép, tự giễu cười.
				"Vương sở trưởng, nếu là người quen cũ, tại sao lâu như vậy, cũng không nghe ông đề cập tới việc ở quê quán còn có vợ con?"
				"Hiểu Mộng, cô đây là nghe ai nói, Vương Điền Hương tôi có bối cảnh gì người trong Bộ Tư Lệnh đều biết rõ, kẻ giống như tôi sao có thể có vợ chứ?"
				"Vậy sao? Trần Tam Bì, nguyên danh Trần Nho, người Tô Châu Côn Sơn, 38 tuổi, phụ thân tên Trần Chi Hoàn, từng làm Hội trưởng Hội Đạo đức Phục hưng..." Cố Hiểu Mộng chậm rãi lên tiếng.
				Vương Điền Hương trong nháy mắt lộ vẻ kinh ngạc, nhưng liền nhanh chóng khôi phục ung dung, giả vờ khinh thường nói: "Những thứ này cũng không phải chuyện mới mẻ gì, tôi còn tưởng Cố sở trưởng bản lãnh bao lớn!"
				"Yên tâm, tôi không phải kẻ ngu, người như Vương sở trưởng, nhất định sẽ không quan tâm an nguy của vợ con." Cố Hiểu Mộng cười một tiếng, bỗng nhiên sắc mặt lạnh lẽo, hạ giọng quát lên, "Nhưng có một cái tên chắc hẳn ông sẽ không xa lạ —— Trương Khiếu Lâm!"
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "6f8f18d1-93dd-477b-b069-9330e33c803f",
        title: "Episode3",
        price: 3,
        novel: `Vương Điền Hương không nói, Cố Hiểu Mộng nói tiếp.
				"Năm đó, Trương Khiếu Lâm là người đứng đầu Thanh Bang, nhân vật làm mưa làm gió bến Thượng Hải, tiểu đệ dưới tay đông như kiến, trong đó có một người tên Trần Tam Bì, thuê một gian dinh thự cạnh Tây Hồ Hàng Châu, chuyên kinh doanh da thịt.
				Cầu Trang là nơi hoang vu hẻo lánh trong núi, nhưng dựa vào quan hệ sau lưng, buôn bán lại quá mức phát đạt...!
				"Nghe nói Trần Tam Bì chọn mở kỹ viện ở Cầu Trang, chính là để thay ông chủ của hắn tìm kiếm bảo tàng Cầu Trang trong truyền thuyết, đáng tiếc! Thực sự đáng tiếc! Hắn còn chưa kịp tìm ra tung tích bảo tàng, người Nhật Bản đã tới rồi, chỉ một đêm, mấy năm khổ tâm kinh doanh của Trần lão bản hủy trong chốc lát!
				"Năm năm trước, Bộ Tổng Tư Lệnh Tiễu phỉ Hoa Đông thành lập, Trương Khiếu Lâm để cho Trần Tam Bì dùng tên giả Vương Điền Hương xâm nhập vào trong, một là để tiện thăm dò tình báo cơ mật các phe, hai là để tiếp tục ở lại Hàng Châu thay ông ta tìm kho báu.
				Về sau nữa, Vương Điền Hương ông thay đổi phe cánh đi theo Tiền Hổ Dực, đầu quân cho họ Uông, mấy năm sau đó cũng lên làm Sở trưởng.
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "7010c166-17cb-4bb5-ba6b-3985b5766464",
        title: "Episode4",
        price: 3,
        novel: `"Vương sở trưởng, đừng có gấp mà! Trước nghe tôi nói hết, rồi mới hẵng nghĩ xem ông có quan hệ gì với Cô Châu hay không." Cố Hiểu Mộng híp mắt, chậm rãi nói, "Vụ án của Trương Khiếu Lâm đã sớm kết thúc, hung thủ bị bắt ngay tại chỗ, lưu loát dứt khoát nhận tội đền tội, tôi chả hơi đâu mà đi lật án.

				Chỉ là, chuyện ông là thuộc hạ cũ của Trương Khiếu Lâm, nếu như truyền đến Kê Minh Tự, để cho Uông chủ tịch biết, vị trí Sở trưởng Sở Đặc Vụ này còn có thể ngồi yên sao?"
				Trương Khiếu Lâm tuy đã sớm quy thuận người Nhật, nhưng dù sao cũng là thủ lĩnh Thanh Bang, năm đó hai phe Tưởng Uông tranh quyền, Thanh Bang khiến cho Uông Tinh Vệ chịu không ít thua thiệt, hôm nay sao có thể bỏ qua bộ hạ cũ của hắn.
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "0aa266fd-038d-47f2-9c07-c4fc20441dcb",
    title: "Ý TƯƠNG TƯ MÀ TÔI TỪNG CHÔN SÂU",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image11.jpg",
    like: 3,
    status: ContentStatus.COMPLETED,
    summary: `Ba năm trước, hắn lên giường với cô.
Ba năm sau, hắn không nhận ra cô, lại tiếp tục kéo cô lên giường.
Sau đó,cô không lấy lòng hắn, hắn nhất định không vui.
Cô không chịu để ý đến hắn thì hắn sẽ khó chịu.
Mọi thứ cô làm đều khiến hắn nghĩ cô đang câu dẫn hắn.
Sau đó, không chỉ thể xác mà ngay cả trái tim của cô hắn cũng muốn chiếm giữ.`,
    episodes: [
      {
        id: "73a83898-f360-4c27-adb3-a0e8c7a7a1dd",
        title: "Episode1",
        price: 3,
        novel: `Mọi người cười vang một trận.

				"Hôm nay là ngày nhà họ Lăng tổ chức tiệc rượu, nếu như Lăng thiếu phu nhân trở về nước, đêm nay chắc sẽ xuất hiện." Có người không thể chờ đợi được nữa muốn xem náo nhiệt.
				
				"Còn gọi là Lăng thiếu phu nhân cái gì chứ? Tôi còn tưởng rằng bọn họ đã sớm ly hôn rồi đấy. Gánh vác cái hư danh lớn như vậy trêи đầu, Lê Cảnh Trí không sợ đau cổ sao." Một cô gái tên Ngọc Thiên Thiên khinh bỉ nói :"Đàn ông của mình mà cũng không nắm được không bằng mau chóng ly hôn, đem tặng cho những người khác còn hơn."
				`,
        isFree: true,
        isBuy: true,
      },
      {
        id: "76e438d9-b3eb-47f3-93c9-890a990bd6fa",
        title: "Episode2",
        price: 3,
        novel: `Có người cười:"Là tặng cho cô sao?"

				Cô gái trẻ cũng không tức giận, trong nụ cười mang theo sự châm chọc:"Không sai , tôi chính là nghĩ như vậy. Kết hôn 3 năm, ngay cả con cũng không có. Nếu như tôi gả cho Lăng thiếu, nhất định sẽ không biến chính mình thành cái bộ dạng đáng thương như Lê Cảnh Trí đâu."
				
				Phía sau trong góc phòng không có ai để ý, những lời nói khó nghe vừa rồi tất cả đều lọt vào trong tai Lê Cảnh Trí.
				
				Thì ra trong mắt người ngoài cuộc hôn nhân của cô chính là như vậy.
				
				Cuộc hôn nhân này phải thất bại thế nào thì mới trở thành trò cười cho mọi người lấy nó làm đề tài nói chuyện như vậy?
				
				Cô không khó chịu nhiều lắm chỉ là cảm thấy lúng túng.
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "777282ce-3d7d-4924-addb-5b10a578c487",
        title: "Episode3",
        price: 3,
        novel: `Lê Cảnh Trí cầm ly rượu, nhẹ nhàng nhấp một ngụm.

				Đôi mi thanh tú khẽ cau lại, cô cảm thấy không quen mùi rượu này nên bỏ ly rượu xuống.
				
				Thật nhàm chán, cô đứng lên, muốn quay trở về phòng nghỉ ngơi.
				
				Phát hiện ra Lê cảnh Trí đã ở bên cạnh mình một thời gian, những cô gái kia lập tức hoảng hồn. Những người vừa nói xấu sau lưng liền cảm thấy quẫn bách cùng xấu hổ trong lòng, các cô căng thẳng nhìn Lê Cảnh Trí.
				
				Cũng không biết là vô tình hay cố ý, có người đánh đổ ly rượu trong tay, tất cả rượu đều đổ vào váy của Lê Cảnh Trí.
				
				"Thật xin lỗi." Người phụ nữ kia nói.
				
				Lê Cảnh Trí nhìn qua người đó một cái, nở nụ cười cho qua, rồi rời đi.
				
				"Lê Cảnh Trí có ý gì? Cô ấy có ghi hận không? Cô ấy có âm thầm gây khó dễ chúng ta không?"
				
				Người phụ nữ kia bắt đầu sợ sệt, cô ta vừa kết hôn không lâu, ngàn vạn lần không thể gây chuyện cho nhà chồng được, "Dù như thế nào thì hiện giờ Lê Cảnh Trí vẫn còn đang là vợ của Lăng thiếu."
				
				Không thể đắc tội ai trong nhà họ Lăng được.
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "0e7b810c-5cc1-4115-b15b-16d9f3892cc3",
    title: "CÔ VỢ THẦN BÍ MUỐN CHẠY ĐÂU",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image12.png",
    like: 632,
    status: ContentStatus.RELEASE,
    summary: `Cậu ba là một nhân vật có tiếng trong thương trường. Người đã tung hoành bao năm, tàn nhẫn, lạnh lùng.
Không ngờ lại có ngày cậu ba trưng khuôn mặt ngốc nghếch kia ra, vì biết tin mình có hai bé con?!!!`,
    episodes: [
      {
        id: "7917aa45-f5af-4ece-acb8-511c2932e0c7",
        title: "Episode1",
        price: 3,
        novel: `Sáng nay, lúc Tổng giám đốc nghiến răng nghiến lợi, bảo anh ta theo dõi Bùi Dật Duy, như thể có thâm thù đại hận gì với Bùi Dật Duy vậy.

				Vốn dĩ anh ta còn tưởng, có phải Tổng giám đốc muốn đối phó Bùi Dật Duy hay không, hóa ra anh ta đã hiểu nhầm.
				Trợ lý cúp máy ở đầu dây bên kia, phía bên này, Lưu Trung Nam cũng càng thêm căng thẳng và lo lắng hơn.
				
				Nãy giờ, cuộc gọi của giữa Tư Đồ Không và Lưu Trung Nam không hề ngắt, nên anh ta cũng nghe thấy được nội dung cuộc nói chuyện vừa rồi.
				Lưu Trung Nam nghe thấy trợ lý nói rằng, Bùi Dật Duy giết người, sau đó hôm nay đi tự thú.
				
				Liên kết lại mọi chuyện, Lưu Trung Nam cũng tự động cho rằng khi nãy Liễu Ảnh đau lòng, buồn bã là vì Bùi Dật Duy.
				Bây giờ, Lưu Trung Nam đã biết được tình cảm của Tổng giám đốc nhà mình dành cho Liễu Ảnh.
				
				Vậy thì lúc này, chắc chắn Tổng giám đốc sẽ không thể nhịn được chuyện Liễu Ảnh đau buồn vì người đàn ông khác, Tổng giám đốc nhất định sẽ rất tức giận.
				`,
        isFree: true,
        isBuy: true,
      },
      {
        id: "80b723bd-18a5-4411-9a25-9d4b0f8953b3",
        title: "Episode2",
        price: 3,
        novel: `Lưu Trung Nam đợi một lúc, không thấy Tổng giám đốc nhà mình nói gì cả, nhưng Tổng giám đốc cũng không cúp máy.

				Tổng giám đốc không cúp máy thì đương nhiên, Lưu Trung Nam sẽ không dám cúp.
				
				Cho nên, cả hai bên đều im lặng, nhưng Lưu Trung Nam vẫn có thể nghe được ở bên kia Tổng giám đốc vẫn đang lái xe.
				Đúng vào lúc này, Lưu Trung Nam nhìn thấy Liễu Ảnh ở cách đó không xa đã đứng dậy, đi về phía trước.
				
				Đôi mắt Lưu Trung Nam sáng lên, sau đó vô thức báo cáo lại: “Tổng giám đốc, cô Liễu rời đi rồi.”
				Lưu Trung Nam đợi một lúc cũng không nghe thấy Tổng giám đốc nhà mình đáp lại, nhớ tới việc chắc chắn Tổng giám đốc đang tức giận, có khi sẽ không tới đây nữa.
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "8103f57d-610c-4f14-81d2-a0594b5b7a42",
        title: "Episode3",
        price: 3,
        novel: `Cô sợ lúc gọi điện sẽ không khống chế nổi cảm xúc của bản thân.
				Cô ở bên Tư Đồ Không năm năm, biết rõ Tư Đồ Không khôn khéo mới mức nào.
				
				Cô không muốn cho Tư Đồ Không có sự chuẩn bị để bịa đặt ra lời nói dối.
				Thứ cô muốn là chất vấn trực tiếp, ngay lúc tâm lý anh ta không có sự chuẩn bị.
				Không thể trách cô không tin Tư Đồ Không được, dù sao thì Tư Đồ Không cũng đã lừa cô năm năm trời.
				Tất cả mọi chuyện bắt đầu từ năm năm trước đều là cái bẫy mà Tư Đồ Không đặt ra cho cô, tất cả mọi thứ đều là lừa gạt.
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "8804ddc2-4214-43b8-803f-9542e1bacd5d",
        title: "Episode4",
        price: 3,
        novel: `“Cô gái à, cô làm sao vậy?” Tài xế thấy vậy, không nhịn lòng được mà hỏi cô, vừa quan tâm vừa lo lắng.
				Liễu Ảnh không trả lời, bởi vì cô sợ mình vừa cất lời thì nước mắt sẽ không kìm được mà rơi xuống.
				“Cô gái cãi nhau với người nhà sao? Hay là có mâu thuẫn với bạn trai thế?” Một lúc sau, tài xế lại không nhịn được lên tiếng lần nữa, ông ấy nhìn vào kính chiếu hậu: “Đằng sau có một chiếc xe vẫn luôn đi theo chúng ta, có phải người nhà của cô không? Hay là bạn trai của cô?”.
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "1877b85a-44ec-4758-ae44-40b2c4fa6723",
    title: "VAN'S FORCE: PHẾ TÍCH THẾ GIỚI CÁC THẦN",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image13.jpg",
    like: 1234,
    status: ContentStatus.RELEASE,
    summary: `Ngày hôm đó, Thần ban cho tất cả chúng sinh Thần vận. Chúng sinh từ đó đều có thể thành Thần.
Ngày hôm đó, Thần ban cho vô hạn tái sinh. Chúng sinh từ đó chết đi sẽ sống lại.
Ngày hôm đó, tồn tại gọi là "quái" xuất hiện khắp nơi. Săn giết chúng sẽ mang lại Thần tinh, nâng cao Thần cấp.`,
    episodes: [
      {
        id: "8e61e005-a5a6-4b49-af31-65e8075ccfe1",
        title: "Episode1",
        price: 3,
        novel: `Turan dừng lại trước cánh cửa gỗ màu xám tro dẫn vào quán rượu quen thuộc. Nó định bước vào nhưng đôi chân lại chợt trở nên thật nặng nề, đến không thể nào nhấc lên được. Áp lực từ việc bị đuổi khi chỉ vừa mới vào làm được nửa ngày khiến nó không dám trở về đây, nhưng nó lại không còn chỗ nào để đi cả. Không người thân, không công ăn việc làm và hơn cả là món nợ hơn năm nghìn xen mà nó phải đối mặt trong ba ngày nữa, Turan thấy mình thật đúng là nỗi hổ thẹn của các đấng tạo hóa. Trong thoáng chốc, nó đã nghĩ đến việc tự sát, nhưng không mất bao lâu để nó nhận ra điều đó là vô ích.`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "8e69080e-c0df-4c94-90f9-ccbfcb6cd006",
        title: "Episode2",
        price: 3,
        novel: `Dứt câu, người đàn bà liền giơ cánh tay lực lưỡng nắm lấy cổ áo Turan rồi cứ thế lôi nó xềnh xệch vào trong. Hành động của bà ta nhanh chóng và dứt khoát như thể đã làm qua rất nhiều lần; và Turan, có vẻ cũng đã quá quen với việc bị lôi đi như thế, chẳng hề có một sự phản kháng nào.

				Người đàn bà đặt Turan lên một chiếc ghế sát quầy trước sự ngạc nhiên của mọi người trong quán rượu. Sau khi lườm một lượt để đánh bay những con mắt tò mò xung quanh, bà ta mới bước vào trong, thì một thì hai lấy một cái cốc gỗ rồi đổ đầy một loại rượu màu đỏ tía. Xong, bà ta đưa nó đến trước mặt Turan, lúc này vẫn đang cúi đầu nhìn xuống.
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "90a4affe-7b7c-4d25-a0ce-b3f8551650cb",
        title: "Episode3",
        price: 3,
        novel: `Turan gật nhẹ đầu rồi chậm rãi kéo cốc rượu lại gần. Nhìn vào trong cốc rượu, nó cố tìm kiếm hình ảnh thảm hại của mình qua mặt phản chiếu nhưng không được; đôi bàn tay không ngừng run rẩy của nó đang gây ra vô vàn những gợn sóng lăn tăn.

				“Mình có nên uống không? Thật sự là mình nên uống chứ?!” Turan nói thầm, nheo mắt vài cái lấy tự tin rồi đưa cốc lên miệng mà uống. Mùi rượu nồng vào miệng nhanh chóng xông lên mũi và mắt cay xè; cổ họng của nó cũng rất nhanh được hâm nóng lên, và rồi đến cả cơ thể của nó. Nó cảm thấy thật lâng lâng. Mọi sự đối với nó giờ đều nhẹ tựa lông hồng. Thứ rượu này, quả thật chưa bao giờ khiến nó thất vọng. “Tuyệt vời!”
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "91c717fa-e542-48af-a8f3-453936475f2f",
        title: "Episode4",
        price: 3,
        novel: `– Mày cứ rượu vào là tươi tắn hẳn ra.

				Người đàn bà cười nói rồi rất nhanh tay làm đầy lại cốc rượu cho Turan. Turan trông cốc vừa đầy liền nâng lên mà uống. Tuy nhiên, người đàn bà đã đưa tay ra ngăn lại.
				
				– Khoan đã.
				
				Đang đà sung sướng thì bị chặn, Turan gắt gỏng:
				
				– Gì nữa đây bà già!?
				
				– Hôm nay thế nào, kể bà nghe rồi uống tiếp.
				
				Turan xì một tiếng vẻ bực bội, bảo:
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "94663c2d-1232-49d1-8f4e-174dee556d4c",
        title: "Episode5",
        price: 3,
        novel: `Người đàn bà cười khì một tiếng, rút tay lại. Turan thấy thế liền đưa cốc lên miệng tu ừng ực. Rượu trôi qua cổ họng lần nữa xông đi khắp người nó, nóng ran. Đặt cốc trở xuống bàn, thở hì hà vài hơi rồi nó mới cất tiếng:

				– Tôi… Nói sao nhỉ… Thật sự là rất hổ thẹn vì là thằng Turan! Tôi hổ thẹn với các đấng tạo hóa của mình! Tôi chẳng làm được cái gì cả! Tôi chỉ là một thằng Turan- à không, là một thằng thất bại thôi!
				
				– Tao chẳng hiểu mày đang nói cái khỉ gì cả. – người đàn bà nói, luôn tay lau khô những cái cốc vừa rửa – Tao chỉ muốn biết vì sao hôm nay mày lại bị đuổi nữa thôi.
				
				– Hừ. Bà còn lạ gì lý do tôi bị đuổi nữa.
				
				– Lại lơ đãng à? Mày lúc nào cũng thế. Có làm đổ bể gì không?
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "9ae52ffb-037e-44cd-97d2-6dda1c0092d3",
        title: "Episode6",
        price: 3,
        novel: `– Mọi chuyện có dễ nghĩ thế đâu. Cũng may là có rượu.

				Turan nói rồi đưa cốc rượu về trước, ra ý thêm rượu. Người đàn bà liền tay đổ đầy cho nó rồi hỏi:
				
				– Thế giờ mày tính sao?
				
				Turan không trả lời vội. Nó nốc hết cốc rượu vừa đổ, đặt lại cốc lên bàn rồi cảm nhận hơi rượu lan đến từng mạch máu nhỏ. Xong xuôi mới đáp:
				
				– Tôi có hẹn ngày mốt thử việc ở tiệm rèn ông Phylts rồi. Cũng không trông đợi gì lắm.
				
				– Mày hẹn ông ta khi nào? – người đàn bà thắc mắc – Đừng bảo tao là bốn ngày trước khi ông ta sang đây mở tiệc mừng lên Thần cấp nhé!
				
				Turan nở một nụ cười đắc ý thay cho câu trả lời. Người đàn bà liền lập tức khẻ đầu nó bằng cái cốc đang lau, gắt:
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "1c5a269b-522a-4337-aeed-2e40e87f5851",
    title: "TỔNG MẠN: CÙNG MIÊU NƯƠNG KHÔNG ĐƠN GIẢN THƯỜNG NGÀY",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image14.jpg",
    like: 32,
    status: ContentStatus.RELEASE,
    summary:
      "Xuyên đế một thế giới không rõ, hắn nghĩ rằng với thân phận của Amakawa Yuuto dù không phải là Trảm Quỷ gia tộc hậu đại nhưng có lẽ vẫn có thể tận hưởng nhân sinh, yên ổn làm một thiếu gia nhà giàu, nhàn nhã qua ngày.",
    episodes: [
      {
        id: "a2c04360-740f-4474-a064-2bbbfd29a72a",
        title: "Episode1",
        price: 3,
        novel: `"Ký chủ phải chăng triệu hoán Servant?"

				"Bắt đầu triệu hoán Servant đi, cho ta đến một cái hai lần liên tiếp triệu hoán."
				
				"Triệu hoán đang tiến hành bên trong..."
				
				Xuất hiện trước mắt Yuuto là một cái màn hình giả lập, bên trong xuất hiện ra hào quang màu xanh lam, quang mang nháy mắt thoáng qua, một cái thẻ hiện lên ở trước mặt hắn.
				
				Cùng FGO bên trong triệu hoán Servant tương tự.
				
				"Chúc mừng Ký Chủ nhận được Khô Lâu Binh(Saber)x10."
				
				"Chúc mừng Ký Chủ nhận được Khô Lâu Binh (Lancer) x10."
				
				Yuuto nhìn thấy rút ra được vật phẩm lúc, không khỏi tức giận đến trực tiếp chửi ầm lên:
				`,
        isFree: true,
        isBuy: true,
      },
      {
        id: "ac4f4292-073a-4dc2-8445-b12ee2b9649e",
        title: "Episode2",
        price: 3,
        novel: `"Master, xảy ra chuyện gì?"

				Medea thấy vậy càng thêm nghi hoặc.
				
				Master của nàng cũng thường xuyên làm ra loại này trẻ con hành vi, Medea đã sớm không kinh ngạc.
				
				"Ta rút trúng Khô Lâu Binh, hơn nữa còn là hai lần liên tiếp." Yuuto đem đầu đuôi sự tình kể lại.
				
				"Là như vậy sao, nhưng cũng không còn cách nào khác, dù sao cũng không thể thay đổi được a, Master."
				
				Nghe vậy Medea mặt ngoài tỏ vẻ tiếc nuối, cảm thông, nhưng trong lòng cười nở hoa.
				
				Làm tốt lắm Hệ Thống!!
				
				Hệ Thống: không cần cám ơn.
				
				Không có Servant khác được triệu hoán ra, như vậy liền không có người để nàng phải chia sẻ Master. Có một cái Kuesu cùng một cái sắp hóa hình con mèo nhỏ là đủ rồi.
				
				Đương nhiên Medea sẽ không nói ra những ý nghĩ này.
				
				Nàng hiểu rõ, nàng có thể bá chiếm lấy Yuuto chỉ là tạm thời, lần sau nhất định sẽ có thêm Servant đến, nhưng ít ra từ bây giờ đến lúc đó, nàng còn có thể bá chiếm Yuuto.
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "ac9003fb-1e40-4921-b1fc-1f71de4f4426",
        title: "Episode3",
        price: 3,
        novel: `"Tới đi, dùng toàn lực công kích ta."

				Dùng cường hóa ma thuật gia trì trường kiếm, Yuuto hướng về được triệu hoán ra khô lâu binh hô lên.
				
				Ngay lập tức khô lâu binh liền hướng về Yuuto phóng đi, trong tay cây đao hướng về phía hắn chém tới.
				
				Keng!!
				
				Thanh thúy kim loại âm thanh vang lên, Yuuto dùng trong tay trường kiếm đem đánh tới cây đao cho cản lại.
				
				"Thì ra là vậy, lực lượng mạnh hơn phổ thông nhân loại một bậc."
				
				Yuuto trong đầu phân tích lấy Khô Lâu Binh thực lực.
				
				Sau đó cánh tay dùng lực truyền vào trường kiếm vung lên, đem trên tay khô lâu binh cho đánh bay.
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "ad897c46-4123-4619-9628-442a667df126",
        title: "Episode4",
        price: 3,
        novel: `Theo Yuuto mệnh lệnh hạ xuống, đám khô lâu binh liền xông lên.

				Yuuto dùng trường kiếm cản lại ba cái khô lâu binh cây đao, ba cái Lancer khô lâu binh nhân cơ hội cầm thương đâm tới.
				
				Yuuto đem khô lâu binh cây đao vung ra, sau đó nhảy lên tránh thoát đánh tới trường thương.
				
				Nhẹ nhàng đáp xuống trung tâm sáu cái khô lâu binh, Yuuto thân thể xoay tròn, một đạo ngân quang sắc bén lóe lên, đem tất cả sáu cái khô lâu binh cho tiêu diệt.
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "ae673b2e-8f29-4570-8a85-b349cea6d86b",
        title: "Episode5",
        price: 3,
        novel: `Long Nha Binh so với Khô Lâu Binh mạnh hơn không ít, bởi vì tài liệu chính của Long Nha Bịn là Long Cốt, so với khô lâu binh dạng này ma vật mạnh hơn gấp ba lần.

				Nghe Medea lời nói Yuuto sắc mặt có chút không tốt.
				
				May mắn của hắn đúng thật là tệ hết sức.
				
				Như vậy khác nào hắn rút trúng đám khô lâu binh này là vô dụng đâu.
				`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
  {
    id: "1f7f8dfb-6c80-4ae8-8e78-c4c55dec3834",
    title: "SAU KHI BỊ ĐUỔI RA KHỎI NHÀ TRA CÔNG QUỲ XIN TÔI QUAY ĐẦU LẠI",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image15.jpg",
    like: 753,
    status: ContentStatus.UNRELEASED,
    summary: `Chỉ là một hiểu lầm không đáng có, thế mà hắn có thể nhẫn tâm đoạt đi tự do của cậu, sỉ nhục tôn nghiêm của cậu, đem cậu ra tiêu khiển như món đồ chơi.
Sáu năm trời, từ một thiên tài vũ đạo, cậu lại phải quỳ trên đầu gối của chính mình, bị người coi thường, khinh nhục.`,
    episodes: [
      {
        id: "b3bf27da-8dbb-4ee6-913c-ad1d6db74914",
        title: "Episode1",
        price: 3,
        novel: `"Thầy Tiểu Lộc, thầy gấp gì chứ?" Lệ Hàng thò qua tới, tươi cười ôn nhu, cùng với hành động cường ngạnh gông cùm xiềng xích đối lập: "Em là sợ thầy té ngã a.

				Thầy không thích, em liền buông tay."
				Dứt lời, hắn thật sự buông lỏng tay ra, còn thân sĩ mà cúi mình vái chào.
				
				Lâm Lộc không rảnh lo để ý đến hắn.
				
				Cậu bước lên phía trước một bước, nhìn về phía cửa.
				
				Giờ phút này tiếng bước chân đã ngừng, nửa trong suốt phản trên cửa, hiện ra một bóng người cao lớn đĩnh bạt.
				
				Thân ảnh kia quên thuộc như thế, giống như đã gặp sáu năm trước, liền hoàn toàn chiếm cứ trái tim Lâm Lộc.
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "b4c7a5ae-d067-4e51-bf0d-4b317ff199e0",
        title: "Episode2",
        price: 3,
        novel: `Cả người Lệ Hằng cũng sáp lại gần, phảng phất lơ đãng mà cúi đầu đoan trang.

				Lông mi thật dài của hắn cơ hồ quét tới chóp mũi Lâm Lộc.
				
				"Được rồi thầy Tiểu Lộc, sạch rồi."
				Lâm Lộc có chút sững sờ.
				
				
				Lệ Hằng trước giờ chưa từng thân mật với cậu như vậy, đây là có chuyện gì?
				Không đợi cậu suy nghĩ cẩn thận, trên cửa đột nhiên phát ra một tiếng vang lớn, là bị người một chân đá văng.
				
				Một trận gió từ cửa dũng mãnh thổi vào.
				
				Lâm lộc quay đầu lại.
				
				Bên cửa, Ninh Trí Viễn chậm rãi tháo kính râm xuống.
				
				Hàm mím chặt, đôi môi mỏng khẽ nhếch.
				
				Ánh mắt lạnh lùng đảo qua trên người Lệ Hàng, sau đó ngừng lại trên mặt Lâm Lộc.
				`,
        isFree: true,
        isBuy: true,
      },
      {
        id: "b704b139-5b71-4c78-ac6d-a11a8f3f688e",
        title: "Episode3",
        price: 3,
        novel: `"Lệ Hàng cậu làm gì vậy?"
				"Không có gì."
				Âm thanh Lệ Hàng hết sức ôn nhu.
				
				Đầu lưỡi hắn liếm liếm kẽ răng, nhẹ giọng cười nói: "Thầy Tiểu Lộc, em chỉ muốn nhắc nhở thấy, trên miệng thầy dính nước tương salad."
				Cửa bị đẩy ra, bản lề phát ra âm thanh kẽo kẹt.
				
				Lâm Lộc quay đầu đi, nhìn đến góc áo bị gió thổi bay lên quen thuộc, một nửa bay lên ngoài cửa rồi lại biến mất.
				
				Lâm Lộc đột nhiên cảm giác được trên môi ngứa ngáy.
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "b7878242-9a22-4813-bd36-401c6b9839db",
        title: "Episode4",
        price: 3,
        novel: `Cậu trả lời tin nhắn: "Thầy không có việc gì, em không cần lo lắng.

				Vừa rồi là bạn của thầy, chúng tôi bởi vì có chuyện khác nên tức giận.
				
				Không liên quan gì đến em.
				
				
				Em cứ cố gắng mà luyện tập đi."
				Nghĩ nghĩ, cậu lại bổ sung thêm: "Còn có, mấy ngày nay sợ là thầy không đến lớp được.
				
				Lệ Hằng, tuần sau là em đi thi Thánh Y Ti rồi? Trước tiên cứ cố gắng mà luyện tập, chìa khóa của phòng làm việc thầy không có lấy đi, ở trên ngăn tủ.
				
				Em đi Thánh Y Ti trước, để chìa khóa lại..."
				Chưa đợi cậu nhắn xong, Lệ Hàng đã gọi điện thoại tới.
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "bb743270-cafc-4cd1-8ea0-12e7f0063ab3",
        title: "Episode5",
        price: 3,
        novel: `Lâm Lộc nhanh chóng tắt cuộc gọi, cậu cơ bản không biết nên nói gì với Lệ Hàng.

				Lại là một chuỗi tin nhắn được gửi đến:
				"Thầy Tiểu Chu, thầy nghe điện thoại đi."
				"Thầy tiếp điện thoại đi, em có chuyện muốn nói với thầy."
				"Thầy Tiểu Chu, thầy không thể khiến cho em không rõ màng mà đi Thánh Y Ti được.
				
				Em không có cách nào chuyên tâm mà múa.
				
				Cầu xin thầy hãy tiếp điện thoại..."
				Khung thoại lại nhảy ra vài câu, Lâm Lộc không biết Lệ Hàng lại đánh chữ nhanh như vậy.
				
				Cậu nhấp môi, muốn làm lơ, không nghĩ tiếng chuông điện thoại di động lại vang lên lần nữa.
				
				Tay run lên, vừa lúc ấy trượt nút nghe.
				
				Không đợi cậu cắt đứt, âm thanh của Lệ Hàng đã vọt ra.
				
				"Thầy Tiểu Chu! Vừa rồi có phải Ninh Trí Viễn không?"
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "c2829f7a-83a5-417e-8c4e-5d86ede29334",
        title: "Episode6",
        price: 3,
        novel: `"Không phải...Em nhận sai rồi..."
				"Thầy nói dối! Em đã từng xem phim điện ảnh hắn diễn rồi, tuy rằng mấy năm nay không tham gia nữa, nhưng mặt hắn nhất định em sẽ không nhận sai, thầy Tiểu Chu, thầy tại sao lại cùng hắn ở bên nhau?"
				"Em thật sự nhận sai người rồi..."
				"Thầy Tiểu Chu, hắn cũng là từ học viện điện ảnh ra, em biết! Bọn thầy đều là tốt nghiệp từ học viện quý tộc kia, có nên thầy mới biết hắn, phải không?"
				"Tôi đã tốt nghiệp trường nào, có liên quan gì đến cậu sao?"
				Lâm Lộc nhin không được phản bác một tiếng, Lệ Hàng lập tức im lặng.
				
				Trong lòng Lâm Lộc đột nhiên có chút áy náy, lập tức nói xin lỗi: "Thật xin lỗi, thầy không cố ý Lệ Hàng.
				
				Chỉ là Lệ Hàng ạ, chuyện này thật sự không liên quan gì đến em.
				
				Em cứ từ từ luyện tập đi, tranh thủ lấy được thành tích tốt.
				
				Thánh Y Vũ là thánh điện của vũ công, đặc biệt là đối với những người không có bối cảnh vũ đạo càng là cơ hội tốt nhất.
				`,
        isFree: false,
        isBuy: true,
      },
    ],
  },
  {
    id: "2193d9ed-3566-417b-b762-ae6ab4e33c96",
    title: "SỐNG LẠI LÀM EM GÁI QUỐC DÂN - TIÊU NHẤT THẤT",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image16.jpg",
    like: 2378,
    status: ContentStatus.COMPLETED,
    summary: `Tô Đào chuyển phát Weibo: Đó là đại ca của tôi
Tin hot nhất vòng giải trí: Nam nhân mặc quân phục soái khí bức người cùng Tô Đào công khai ăn tối
Tô Đào chuyển phát Weibo: Đó là nhị ca của tôi
Tin hot nhất vòng giải trí: Tin đồn bá đạo tổng tài bất ngờ mở công ty giải trí bao nuôi Tô Đào
Tô Đào chuyển phát Weibo: Đó là tam ca của tôi`,
    episodes: [
      {
        id: "c3a108df-270c-4c53-8562-98f16bad846b",
        title: "Episode1",
        price: 3,
        novel: `Tô Đào ngồi trên giường đơ ra xem xét dáng vẻ hiện giờ của bản thân, cô đã duy trì trạng thái này nửa giờ đồng hồ, ai có thể đến nói cho cô, sao cô lại bị biến thành dáng vẻ của một đứa trẻ chỉ mới có bốn năm tuổi như thế này?

				"Quay ngược thời gian rồi?"
				
				Nhưng khi một giọng nói non nớt phát ra từ miệng của cô (vang lên), tuy rằng cô biết đây không phải nằm mơ, Tô Đào vẫn khó tránh khỏi bị kinh sợ, đôi mắt hắc bạch phân minh mở to nhìn trừng trừng lên trần nhà, cô cảm thấy tình trước mắt vượt quá sức tưởng tượng của mình.
				
				Đang mải mê suy nghĩ, cánh cửa két một tiếng mở ra, Tô Đào nhìn theo tiếng phát ra âm thanh, liền thấy một phụ nhân xinh đẹp đi vào với vẻ mặt lo lắng, lúc cô đang nhìn người phụ nữ đó, bà ấy đang đi về phía cô, dịu dàng ôm cô vào trong lòng, trán dán vào trán cô, rồi lại hôn một cái vào khuôn mặt đỏ rực của cô.
				
				Thân thể của Tô Đào cứng ngắc, đưa tay lên mò mẫm những chỗ bị hôn qua, ngẩng lên nhìn chằm chằm vào người phụ nữ, không nói lời nào.
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "c6e68762-c6ff-4a01-9bd5-48081278af07",
        title: "Episode2",
        price: 3,
        novel: `Diệp Ngưng thấy con gái gật đầu mới thở phào nhẹ nhõm, bắt đầu từ hôm kia nữ nhi vẫn luôn sốt cao không ngừng, qua vài hôm bệnh tốt lên bác sĩ cũng không dám cho xuất viện về nhà, sợ con bé lại phát sốt, mấy ngày bị bệnh con bé đều không ăn gì, người cũng đã gầy đi mấy vòng, tâm bệnh của bà được Tô Đào đến đều đã chữa khỏi.

				Vừa vặn hôm nay con trai được nghỉ, chồng cũng đi công tác về rồi rất nhanh sẽ về tới nhà, phải làm thật nhiều món ngon để bọn nhỏ bồi bổ.
				
				"Đến. Mama ôm con đến phòng khách tìm anh trai chơi", Diệp Ngưng không có suy nghĩ nhiều về sự khác thường của con gái, chỉ nghĩ con bé vẫn chưa tỉnh ngủ.
				
				Mama? Cô cũng có mẹ sao? Cô cư nhiên lại có mẹ rồi! Bất tri bất giác, Tô Đào cảm thấy mũi có chút chua chát.
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "d5e6bcc0-05f2-4f68-ae10-a267a458bf77",
        title: "Episode3",
        price: 3,
        novel: `Diệp Ngưng một đường bế Tô Đào đến phòng khách, cách bài trí trước mắt làm Tô Đào hết sức kinh ngạc. Đây.. nơi này không phải cô nhi viện? Lúc này cô mới phản ứng lại, lúc này mẹ gọi cô là Nhu Nhu, đó không phải là tên của cô, vậy cũng có thể nói cô sống lại trên thân thể của người khác, thân thể của một đứa trẻ bốn năm tuổi, bàn tay nắm chặt gần như run rẩy.

				Việc này cũng không làm cô ngạc nhiên quá lâu, sự chú ý của Tô Đào đã bị thu hút bởi tiểu nam hài ngồi trên sopha đang xem hoạt hình rồi.
				
				Đó là một bé trai khoảng tám chin tuổi, tiểu nam hài phấn điêu ngọc trác, hai má phúng phính, một đôi mắt to vừa đen vừa sáng, giống hệt một con nai chớp mắt nhìn chăm chú vào ti- vi, chỉ là nhìn có chút quen quen.
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "d7d503c9-b540-481b-bcc6-99a9a8bca9b2",
        title: "Episode4",
        price: 3,
        novel: `Mắt Tô Đào bỗng trợn tròn lên, cô còn có anh trai?

				"Đói rồi sao? Vậy con trông em để mama đi làm cơm có được không?" Diệp ngưng vân vê khuôn mặt nhỏ nhắn của con trai, đem Tô Đào đặt xuống để con trai dẫn em gái đi xem ti- vi, tự mình đến tủ lạnh lấy ít nguyên liệu rồi đem vào bếp. Tô Đào bị anh trai kéo tay nhỏ đến sopha, sopha mềm mại bị ép trũng xuống, thằng bé rất thuận lợi ngồi xuống, Tô Đào phải dùng cả tay chân thì mới có thể ngồi vững được, còn là anh trai ở đằng sau đẩy một cái mới thành công.
				
				Tô Đào duỗi thẳng hai chân ngắn ngủn, yên lặng cùng anh trai so so, quyết định vẫn là chuyên tâm xem ti- vi thôi!
				
				Dù sao cô hiện tại vẫn còn nhỏ, chân ngắn không xấu hổ!
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "eef1fb62-55c8-4bc2-821a-859f3b826eb4",
        title: "Episode5",
        price: 3,
        novel: `Tô Đào từ nhỏ đã hi vọng bản thân có thể trở thành một người có ích có xã hội, vậy nên lúc điền đợn nguyện vọng thi đại học, Tô Đào ghi danh vào một trường cảnh sát, là trường công an tốt nhất trong nước, sau khi tốt nghiệp sẽ trở thành một cảnh sát hình sự.

				Lần đầu tiên làm nhiệm vụ liền vinh dự mà hi sinh rồi.
				
				Nghĩ tới đây, Tô Đào liền không nhịn được cười, ngay cả cô cũng không chú ý tới lúm đồng tiền nhỏ cạnh miệng xao động cùng cậu bé bên cạnh giống nhau, nếu số phận đã cho cô cơ hội sống lại một lần nữa, lại cho cô một gia đình, vậy cô nhất định sẽ sống thật tốt, vì bản thân cũng vì chủ nhân nguyên bản của cơ thể này.
				`,
        isFree: false,
        isBuy: true,
      },
    ],
  },
  {
    id: "3f770b8f-4289-4ee6-a8fe-37ae4b5e1aa4",
    title: "TU LA GIỚI CHÍ TÔN",
    image:
      "https://rebelcorp-test.s3.ap-northeast-2.amazonaws.com/images/vietnam_sample_image17.png",
    like: 3,
    status: ContentStatus.RELEASE,
    summary: `Có những người, không trông mong cả đời vẻ vang hào hùng, cũng không hy vọng sẽ làm nên sự nghiệp to lớn gì...
Họ chỉ muốn một cuộc đời bình lặng, vui vẻ bên gia đình nhỏ của mình, giống như hắn.
Nhưng, một hôm, hắn đi săn về, căn nhà nhỏ hạnh phúc của hắn đã bị cường đạo tấn công, vợ và hai đứa con của hắn cũng đang nguy ngập...`,
    episodes: [
      {
        id: "f5600091-c911-4e82-8a81-59655c0062e4",
        title: "Episode1",
        price: 3,
        novel: `- người thanh niên tên Võ Thừa hắn là 1 người bình thường sống trong 1 hạp cốc không màng thế sự cùng vợ và 2 con. Cuộc sống bình yên vui vẻ.. nhưng hắn đâu biết cơn ác mộng khủng khiếp nhất đời mình sắp đến.

				- đi thôi con trai. Chúng ta về nhà. Không hiểu sao từ sáng đến giờ hắn cứ thấy hồi hộp lo lắng. Không biết tiểu như. Nàng thế nào..! Đoạn đường không xa lắm. 2 người 1 cao vác theo con lợn rừng to tướng và 1 đứa bé chạy nhảy xung quanh..
				
				Tiểu phong đừng nghịch nữa nhìn đứa con trai mang theo ánh mắt đầy nhu hòa hắn thì thầm trong lòng. Ở nhà chắc không có chuyện gì.
				
				Bước gần đến sơn cốc cảnh trước mắt làm hắn trợn tròn mắt quẳng con lợn to đùng xuống đất tóm lấy đứa bé và lao thẳng về hướng nhà mình..
				`,
        isFree: true,
        isBuy: false,
      },
      {
        id: "f5d03710-f3f3-47a0-b970-d5df23be5a4f",
        title: "Episode2",
        price: 3,
        novel: `Ta đã làm gì sai mà Thiên lại đối xử với ta như vậy...? Thủ lĩnh cường đạo nhìn hắn với ánh mắt trêu chọc mỉa mai " thiên sao, thế giới này chỉ có cường giả, không có thực lực thì dù ngươi có vào thét thế nào cũng phải chịu cảnh vạn kiếp bất phục mà thôi"

				- trong tuyệt vọng hắn lằm bầm âm thanh chỉ có đất trời nghe được." Hởi thần linh. Hởi quỷ dữ.. ta nguyện bán linh hồn mình để đổi lấy một kiếp. 1 kíp kia ta sẽ trở lại và xóa sạch cái ác trên thế giới đầy tội lỗi này"
				
				Lời nói vừa xong đôi đồng tử trong mắt hắn cũng dần đứng.. hắn thấy mình chìm trong vô tận bóng tối..
				`,
        isFree: false,
        isBuy: true,
      },
      {
        id: "f719a350-e11b-4dd2-b953-3c26fe241a66",
        title: "Episode3",
        price: 3,
        novel: `Ở một nơi trong rừng rậm bạt ngàn. Đại thụ cao to chọc trời.. yêu thú thỉnh thoảng rú rống nghe rợn người..

				Một mỏm đá dưới gốc đại thụ to lớn, có một nhóm người đang ngồi tĩnh tọa. Đám người này có nam có nữ... đám người này chính là đám người tinh gia cùng đám người trường ngạo.
				
				- Tinh gia a. Cái thủ thế giơ ngón giữa này lên là nghĩa gì vậy.
				
				Một thiếu niên khoảng 15t tiến lên đưa ngón tay giữa dựng thẳng lên trời trước mặt tinh gia hỏi nhỏ. Tinh gia chợn mắt. Tiểu tử.. hừ... hắn muốn nổi cáo nhưng nghĩ thằng nhóc này không hiểu chuyện nên gằng giọng.
				
				- Đừng có mà đưa vào mặt ta chứ thằng nhóc..
				`,
        isFree: false,
        isBuy: false,
      },
      {
        id: "fe807b52-e996-487a-9fe9-51b9f262b0f7",
        title: "Episode4",
        price: 3,
        novel: `Cái thủ thế này là trước đây rất lâu hắn trong lúc bị người ta truy đuổi đã tìm đến sự giúp đỡ kia của một lão bằng hữu đến từ chân long cổ tộc tên là Lạc Long Quân. Vị này là một kiêu hùng. Năm đó vì thê tử một mình xông vào tiên tộc đại náo sau đó mang nàng đi trải qua đại chiến nên thê tử của vị này bị thương rất nặng. Hai người sao này vì không được sự đồng tình của cả tiên tộc và chân long cổ tộc nên đã đi đến lánh đời ở địa phương đó. Mà tinh gia đã từng luyện đan dược giúp vị này cứu thê tử của mình. Nên khi nghe tinh gia bị gặp hiểm cảnh vị này đã ra tay che chở hắn. Từ đó tinh gia cũng ở lại nơi này một khoảng thời gian.1 tinh hà yên bình.. tinh hà kia rất ít sự sống. Ở một hệ ngân hà trong số đó có hành tinh gọi là trái đất. Những đại năng nơi này bao gồm Lạc Long Quân, zues,odin. Bàn cổ.... và một số người nữa tiến hành phong ấn đồng thời phong tỏa linh khí. Hành tinh kia không có linh khí nên cũng không thể tu luyện. Trong cảm nhận của tinh gia hành tinh đó thật sự là nơi yên bình nhất.mặc dù ở các quốc gia với nhau có mâu thuẫn nhưng chung quy rất yên lành. Không phải như những thế giới khác trong vũ trụ vì tranh chấp không ngừng chém giết thậm chí có rất nhiều hành tinh to lớn cũng vì chiến đấu của các đại năng mà vỡ nát vị diện sinh linh đồ thán.`,
        isFree: false,
        isBuy: false,
      },
    ],
  },
];

export default contents;
