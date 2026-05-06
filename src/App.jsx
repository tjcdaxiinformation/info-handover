import React, { useState, useMemo } from 'react';
import { 
  Users, FileText, Archive, ShieldCheck, Search, 
  ExternalLink, Clock, FolderTree, Home, 
  BookOpen, Settings, Monitor, Bell, Megaphone, ChevronRight,
  Database, LayoutGrid, Fingerprint, X, Car, Calendar, Heart, 
  Newspaper, Star, Quote
} from 'lucide-react';

import { 
  NEWS_DATA, GROUPS_DATA, MEMBERSHIP_DATA, 
  DOCUMENT_STRUCTURE, ASSETS_DATA, VEHICLE_REPORT_LINK,
  CHURCH_ANNOUNCEMENTS
} from './data';

const NAV_ITEMS = [
  { id: 'overview', icon: Home, label: '總覽' },
  { id: 'church_news', icon: Newspaper, label: '活動公文' },
  { id: 'groups', icon: Users, label: '組織' },
  { id: 'membership', icon: FileText, label: '會籍' },
  { id: 'documents', icon: Archive, label: '公文' },
];

// --- 側邊欄與底部導覽組件 ---
const SidebarItem = ({ id, icon: Icon, label, activeTab, onClick }) => (
  <button onClick={() => onClick(id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:bg-gray-100'}`}>
    <Icon size={20} /><span className="font-semibold text-sm">{label}</span>
  </button>
);

const BottomNavItem = ({ id, icon: Icon, label, activeTab, onClick }) => (
  <button onClick={() => onClick(id)} className={`flex flex-col items-center justify-center flex-1 py-2 ${activeTab === id ? 'text-blue-600' : 'text-gray-400'}`}>
    <Icon size={20} /><span className="text-[10px] mt-1 font-bold">{label}</span>
  </button>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* 核心功能：公文活動快捷按鈕 (新增) */}
            <button 
              onClick={() => setActiveTab('church_news')}
              className="w-full group relative bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl p-6 text-white shadow-xl flex items-center justify-between overflow-hidden transition-all hover:scale-[1.01] active:scale-95"
            >
              <div className="flex items-center space-x-5 relative z-10 text-left">
                <div className="bg-amber-400 p-4 rounded-2xl text-slate-900 shadow-lg">
                  <Megaphone size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-amber-400">近期教會活動及公文宣導</h3>
                  <p className="text-xs text-blue-100 opacity-80">點擊查看代禱名單、聚會日程與總會公文</p>
                </div>
              </div>
              <ChevronRight className="relative z-10 text-amber-400" size={28} />
              <Newspaper className="absolute right-[-5%] bottom-[-20%] text-white/5 w-40 h-40 rotate-12" />
            </button>

            {/* 核心功能：公務車快捷鍵 */}
            <a href={VEHICLE_REPORT_LINK} target="_blank" rel="noreferrer" className="block group relative bg-emerald-600 rounded-3xl p-6 text-white shadow-lg flex items-center justify-between overflow-hidden transition-all hover:bg-emerald-700">
              <div className="flex items-center space-x-5 relative z-10">
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md"><Car size={32} /></div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">公務車行駛回報</h3>
                  <p className="text-xs text-emerald-100">填寫里程、用途與司機資訊</p>
                </div>
              </div>
              <ChevronRight className="relative z-10" size={28} />
              <Car className="absolute right-[-5%] bottom-[-15%] text-white/10 w-40 h-40 rotate-12" />
            </a>

            {/* 搜尋列 */}
            <div className="relative bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm flex items-center">
              <div className="pl-4 pr-2 text-gray-400"><Search size={20} /></div>
              <input type="text" placeholder="快速搜尋..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="flex-1 py-3 text-sm focus:outline-none" />
            </div>
          </div>
        );

      case 'church_news':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border-l-8 border-amber-400 shadow-sm">
              <h2 className="text-2xl font-black text-gray-900 flex items-center">
                <Calendar className="mr-2 text-amber-500" /> 本會宣布事項
              </h2>
              <p className="text-xs text-gray-400 mt-1">更新日期：{CHURCH_ANNOUNCEMENTS.updateDate}</p>
            </div>

            {/* 代禱事項卡片 */}
            <div className="bg-red-50 rounded-3xl p-6 border border-red-100">
              <h3 className="text-red-700 font-black mb-4 flex items-center"><Heart size={20} className="mr-2" /> 代禱事項 (求主憐憫)</h3>
              <div className="space-y-4">
                {CHURCH_ANNOUNCEMENTS.prayers.map((p, i) => (
                  <div key={i} className="bg-white p-4 rounded-2xl shadow-sm">
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{p.name}</span>
                    <p className="text-sm font-bold text-gray-800 mt-1 leading-relaxed">{p.list}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 活動日程表 */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-slate-800 p-4 text-white font-bold text-sm flex items-center">
                <Clock size={16} className="mr-2 text-amber-400" /> 近期活動日程預告
              </div>
              <div className="divide-y divide-gray-50">
                {CHURCH_ANNOUNCEMENTS.events.map((e, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-blue-600 font-black text-xs">{e.date}</span>
                      <span className="text-gray-900 font-bold text-sm">{e.location}</span>
                    </div>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-gray-500">{e.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 財務與十大信條快捷 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <h3 className="font-black text-blue-800 text-sm mb-2 flex items-center"><Database size={16} className="mr-2" /> 財務與經常費狀態</h3>
                <p className="text-lg font-black text-blue-900">{CHURCH_ANNOUNCEMENTS.finance.monthly}</p>
                <p className="text-xs text-blue-600 mt-1 font-bold">{CHURCH_ANNOUNCEMENTS.finance.status}</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-amber-800 text-sm flex items-center"><Star size={16} className="mr-2" /> 信仰根基</h3>
                  <p className="text-xs text-amber-700 font-bold">十大信條與聚會讀經進度</p>
                </div>
                <ChevronRight className="text-amber-400" />
              </div>
            </div>
          </div>
        );

      case 'groups':
        return <div className="p-4">組織組別內容...</div>;
      case 'membership':
        return <div className="p-4">會籍管理內容...</div>;
      case 'documents':
        return <div className="p-4">公文檔案內容...</div>;
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans selection:bg-blue-100 overflow-hidden">
      {/* 桌面側邊欄 */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 p-8 flex-col shadow-sm">
        <div className="flex items-center space-x-3 px-2 mb-12">
          <div className="bg-blue-700 p-2.5 rounded-[14px] text-white shadow-xl shadow-blue-100"><Monitor size={22} /></div>
          <div>
            <h1 className="text-sm font-black text-gray-900 leading-none">TJCDaxi / Info</h1>
            <span className="text-[9px] text-blue-600 uppercase font-black tracking-widest mt-1 block">資訊股交接系統</span>
          </div>
        </div>
        <nav className="space-y-1 flex-1">
          {NAV_ITEMS.map(item => <SidebarItem key={item.id} {...item} activeTab={activeTab} onClick={setActiveTab} />)}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <span className="text-gray-900 font-black text-sm uppercase">{NAV_ITEMS.find(n => n.id === activeTab)?.label}</span>
          <div className="md:hidden bg-blue-700 p-1.5 rounded-lg text-white"><Monitor size={16} /></div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-5 md:p-10 pb-24 md:pb-10 scroll-smooth">
          <div className="max-w-4xl mx-auto">{renderContent()}</div>
        </main>

        <nav className="md:hidden flex bg-white fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 shadow-lg">
          {NAV_ITEMS.map(item => <BottomNavItem key={item.id} {...item} activeTab={activeTab} onClick={setActiveTab} />)}
        </nav>
      </div>
    </div>
  );
}

