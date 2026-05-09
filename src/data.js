// --- 1. 首頁快捷消息 (News) ---
export const NEWS_DATA = [
  { id: 1, title: "近期收文", content: "115年5月6日：總會通知關於各教會資訊設備維護與資安防護宣導公文。" },
  { id: 2, title: "會議決議", content: "115年4月15日：職務會決議通過購置資訊股專用儲存設備 (NAS) 計畫。" }
];

// --- 2. 組織組別清單 (Groups) ---
export const GROUPS_DATA = [
  { id: 'g1', name: '教牧股', leader: '梁秀娟', folder: 'https://drive.google.com/drive/folders/18i_y6YClkT2BRVPAVDnonxEi5cooQnUL?usp=drive_link' },
  { id: 'g2', name: '宣道股', leader: '王鴻志', folder: 'https://drive.google.com/drive/folders/12nrOUxHjYJwS85ZdB0rUIXlpEhav5e7n?usp=drive_link' },
  { id: 'g3', name: '教育股', leader: '張蓉惠', folder: 'https://drive.google.com/drive/folders/173sLez0MpJxpbv-80Jlsl1DKjuGit5dl?usp=drive_link' },
  { id: 'g4', name: '事務股', leader: '楊忠生', folder: 'https://drive.google.com/drive/folders/1xVDcA6DBDkdIZdL3D4tkGW8zHDapQCb-?usp=sharing' },
  { id: 'g5', name: '資訊股', leader: '林茜葦', folder: 'https://drive.google.com/drive/folders/1oORI6DgGjfS_MipKnK9-o8D53apOXjV8?usp=drive_link' },
  { id: 'g6', name: '會計股', leader: '鍾霖恩', folder: 'https://drive.google.com/drive/folders/1DzreuF3-7Iz79NpkdMbc3KjlNCPO9goS?usp=drive_link' },
  { id: 'g7', name: '出納股', leader: '黃琬珊', folder: 'https://drive.google.com/drive/folders/1vnOoCFEI-4D7_X5Bj_pcw-up4HE-zgr5?usp=drive_link' },
];

// --- 3. 會籍系統連結 (Membership) ---
export const MEMBERSHIP_DATA = [
  { id: 'm1', name: 'MMS 會籍管理系統', purpose: '總會標準會籍資料維護', link: 'https://mms.tjc.org.tw/' },
  { id: 'm2', name: '本會會籍名簿', purpose: '大溪教會內部紙本/數位對照名冊', link: '#' },
  { id: 'm3', name: '信徒基本資料卡', purpose: '新進信徒登錄表單', link: '#' },
  { id: 'm4', name: '實名制登入系統', purpose: '教會活動簽到專用', link: '#' },
  { id: 'm5', name: '新舊任負責人交接清冊', purpose: '交接項目列表存檔', link: 'https://docs.google.com/document/d/1w-VyxTfIEOC33tppyjoMTJFld-ZIXkqlvSRbt1L0_T0/edit?usp=drive_link' },
];

// --- 4. 公文分類結構 (由單位與年份構成) ---
export const DOCUMENT_STRUCTURE = [
  {
    category: "總會公文",
    items: [
      { name: "2026年度公文", link: "#" },
      { name: "2025年度公文", link: "#" },
      { name: "2024年度公文", link: "#" },
      { name: "2023年度公文", link: "#" },
      { name: "2022年度公文", link: "https://www.adobe.com/files/projects/urn:aaid:sc:AP:8038e8d5-a198-4e1b-9d56-4af20252e18d?openFrom=copy-link" }
    ]
  },
  {
    category: "西區辦事處公文",
    items: [
      { name: "2026年度公文", link: "#" },
      { name: "2025年度公文", link: "#" },
      { name: "2024年度公文", link: "#" },
      { name: "2023年度公文", link: "#" },
      { name: "2022年度公文", link: "#" },
    ]
  },
  {
    category: "信徒會議紀錄",
    items: [
      { name: "2026年度信徒會議紀錄", link: "https://drive.google.com/drive/folders/1SPx8s-_eYBvXOVXf-LgmwrBOg1TmfPDu?usp=drive_link" },
      { name: "2025年度信徒會議紀錄", link: "#" },
      { name: "2024年度信徒會議紀錄", link: "#" },
      { name: "2023年度信徒會議紀錄", link: "#" },
      { name: "2022年度信徒會議紀錄", link: "#" }
    ]
  },
  {
    category: "職務會會議紀錄",
    items: [
      { name: "2026年度職務會會議紀錄", link: "https://drive.google.com/drive/folders/1FZdnmfcKahiuIJv6YFN7eyb6-BdYSQwh?usp=drive_link" },
      { name: "2025年度職務會會議紀錄", link: "#" },
      { name: "2024年度職務會會議紀錄", link: "#" },
      { name: "2023年度職務會會議紀錄", link: "#" },
      { name: "2022年度職務會會議紀錄", link: "#" }
    ]
  },
  {
    category: "負責人會會議紀錄",
    items: [
      { name: "2026年度負責人會會議紀錄", link: "https://drive.google.com/drive/folders/1Ipu4X5j9gYvoMIFn6xXnHa-fahqPI_mI?usp=drive_link" },
      { name: "2025年度負責人會會議紀錄", link: "#" },
      { name: "2024年度負責人會會議紀錄", link: "#" },
      { name: "2023年度負責人會會議紀錄", link: "#" },
      { name: "2022年度負責人會會議紀錄", link: "#" }
    ]
  }
];



// --- 5. 財產與印信保管 (Assets) ---
export const ASSETS_DATA = [
  { id: 'a1', name: '教會公印 (大印)', keeper: '資訊股負責',link: "https://drive.google.com/file/d/1EggnUxZ8YYDZkTPIBgOIy76SITsHWthV/view?usp=drive_link" },
  { id: 'a2', name: 'iMac 工作站', keeper: '資訊股負責' },
  { id: 'a3', name: '音響控制盤', keeper: '事務組' },
  { id: 'a4', name: '公務車鑰匙', keeper: '事務組' },
];

// --- 6. 外部工具連結 ---
export const VEHICLE_REPORT_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSd_example/viewform";

// --- 7. 本會宣布事項 (Announcements) ---
export const CHURCH_ANNOUNCEMENTS = {
  updateDate: "2026/05/09",
  finance: {
    monthly: "經常費結餘：NT$ 938,173（3月份收支月報表）",
    status: "財務運作正常，準備進行第二季審核。"
  },
  prayers: [
    { name: "為信徒身心靈", list: "請為身體欠安、年老體弱的弟兄姊妹代禱，祈求神賜下平安與康復。" },
    { name: "為建堂工程", list: "請為後續維修工程與經費籌措代禱。" }
  ],
  events: [
    { date: "05/10 (日)", time: "10:00", location: "本會大會堂", title: "母親節特別聚會" },
    { date: "05/17 (日)", time: "14:00", location: "二樓會議室", title: "各系負責人月會" }
  ],
  // 剛才新增的連結
  handoverLink: "https://drive.google.com/open?id=1w-VyxTfIEOC33tppyjoMTJFld-ZIXkqlvSRbt1L0_T0"
};

