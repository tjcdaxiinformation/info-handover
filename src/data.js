// --- 1. 首頁快捷消息 (News) ---
export const NEWS_DATA = [
  { id: 1, title: "近期收文", content: "115年5月6日：總會通知關於各教會資訊設備維護與資安防護宣導公文。" },
  { id: 2, title: "會議決議", content: "115年4月15日：職務會決議通過購置資訊股專用儲存設備 (NAS) 計畫。" }
];

// --- 2. 組織組別清單 (Groups) ---
export const GROUPS_DATA = [
  { id: 'g1', name: '宣道組', leader: '林長老', folder: 'https://drive.google.com/drive/folders/1_example1' },
  { id: 'g2', name: '教育組', leader: '陳執事', folder: 'https://drive.google.com/drive/folders/1_example2' },
  { id: 'g3', name: '事務組', leader: '王執事', folder: 'https://drive.google.com/drive/folders/1_example3' },
  { id: 'g4', name: '資訊股', leader: '王鴻志', folder: 'https://drive.google.com/drive/folders/1_example4' },
];

// --- 3. 會籍系統連結 (Membership) ---
export const MEMBERSHIP_DATA = [
  { id: 'm1', name: 'MMS 會籍管理系統', purpose: '總會標準會籍資料維護', link: 'https://mms.tjc.org.tw/' },
  { id: 'm2', name: '本會會籍名簿', purpose: '大溪教會內部紙本/數位對照名冊', link: '#' },
  { id: 'm3', name: '信徒基本資料卡', purpose: '新進信徒登錄表單', link: '#' },
  { id: 'm4', name: '實名制登入系統', purpose: '教會活動簽到專用', link: '#' },
  { id: 'm5', name: '指紋/生物識別', purpose: '門禁與特殊權限管理', link: '#' },
];

// --- 4. 公文分類結構 (Documents) ---
export const DOCUMENT_STRUCTURE = [
  {
    category: "總會 / 西區辦事處公文",
    items: [
      { name: "115年度宣道計畫", link: "#" },
      { name: "西區教牧人員異動公告", link: "#" }
    ]
  },
  {
    category: "本會會議紀錄",
    items: [
      { name: "職務會紀錄", link: "#" },
      { name: "信徒代表大會紀錄", link: "#" },
      { name: "各系負責人會議", link: "#" }
    ]
  }
];

// --- 5. 財產與印信保管 (Assets) ---
export const ASSETS_DATA = [
  { id: 'a1', name: '教會公印 (大印)', keeper: '資訊股負責' },
  { id: 'a2', name: 'iMac 工作站', keeper: '資訊股負責' },
  { id: 'a3', name: '音響控制盤', keeper: '事務組' },
  { id: 'a4', name: '公務車鑰匙', keeper: '事務組' },
];

// --- 6. 外部工具連結 ---
export const VEHICLE_REPORT_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSd_example/viewform";

// --- 7. 本會宣布事項 (Announcements) ---
export const CHURCH_ANNOUNCEMENTS = {
  updateDate: "2026/05/07",
  finance: {
    monthly: "經常費結餘：NT$ 450,000",
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

