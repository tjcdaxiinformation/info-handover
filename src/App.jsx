import React, { useState, useMemo } from 'react';
import { 
  Users, FileText, Archive, ShieldCheck, Search, 
  ExternalLink, Clock, FolderTree, Home, 
  BookOpen, Settings, Monitor, Bell, Megaphone, ChevronRight,
  Database, LayoutGrid, Fingerprint, X, Car, Calendar, Heart, 
  Newspaper, Star, Shield, Info, MapPin
} from 'lucide-react';

// 匯入資料
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
  { id: 'assets', icon: ShieldCheck, label: '財產' },
];

// --- 介面組件 ---
const SidebarItem = ({ id, icon: Icon, label, activeTab, onClick }) => (
  <button onClick={() => onClick(id)} className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-gray-500 hover:bg-gray-100'}`}>
    <Icon size={18} /><span className="font-bold text-sm">{label}</span>
  </button>
);

const BottomNavItem = ({ id, icon: Icon, label, activeTab, onClick }) => (
  <button onClick={() => onClick(id)} className={`flex flex-col items-center justify-center flex-1 py-2 ${activeTab === id ? 'text-blue-600' : 'text-gray-400'}`}>
    <Icon size={18} /><span className="text-[10px] mt-1 font-black">{label}</span>
  </button>
);

const PageHeader = ({ title, description, icon: Icon, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
    emerald: "bg-emerald-50 text-emerald-600",
    rose: "bg-rose-50 text-rose-600"
  };
  return (
    <div className="mb-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex items-center space-x-3 mb-2">
        <div className={`p-2.5 rounded-xl ${colors[color]}`}><Icon size={22} /></div>
        <h2 className="text-xl font-black text-gray-800 tracking-tight">{title}</h2>
      </div>
      <p className="text-gray-500 text-xs font-medium leading-relaxed">{description}</p>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // 搜尋過濾 (主要過濾組別與會籍)
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return [];
    return GROUPS_DATA.filter(g => g.name.includes(searchTerm) || g.leader.includes(searchTerm));
  }, [searchTerm]);

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-5 animate-in fade-in duration-500">
             {/* 重要公告按鈕 */}
             <button onClick={() => setActiveTab('church_news')} className="w-full group relative bg-slate-900 rounded-[2rem] p-7 text-white shadow-2xl flex items-center justify-between overflow-hidden transition-all hover:bg-slate-800 active:scale-95">
                <div className="flex items-center space-x-5 relative z-10 text-left">
                  <div className="bg-amber-400 p-4 rounded-2xl text-slate-900 shadow-xl animate-bounce-slow"><Megaphone size={28} /></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black tracking-tight text-amber-400">近期教會活動及公文宣導</h3>
                    <p className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Church Announcements & Documents</p>
                  </div>
                </div>
                <ChevronRight className="relative z-10 text-slate-500 group-hover:text-amber-400 transition-colors" size={24} />
                <div className="absolute right-[-2%] bottom-[-10%] opacity-10 rotate-12"><Newspaper size={120} /></div>
             </button>

             {/* 公務車快捷 */}
             <a href={VEHICLE_REPORT_LINK} target="_blank" rel="noreferrer" className="block group relative bg-emerald-600 rounded-[2rem] p-6 text-white shadow-xl flex items-center justify-between overflow-hidden transition-all hover:bg-emerald-700">
                <div className="flex items-center space-x-5 relative z-10">
                  <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md shadow-inner"><Car size={28} /></div>
                  <div>
                    <h3 className="text-lg font-black tracking-tight">公務車行駛回報</h3>
                    <p className="text-xs text-emerald-100 opacity-80">Google 表單雲端同步</p>
                  </div>
                </div>
                <div className="bg-white/10 p-2 rounded-full"><ChevronRight size={20} /></div>
             </a>

             {/* 搜尋列 */}
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-10 group-focus-within:opacity-25 transition"></div>
                <div className="relative bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                  <div className="pl-4 pr-2 text-gray-400"><Search size={20} /></div>
                  <input type="text" placeholder="搜尋負責人、組別或交接項目..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="flex-1 py-3 text-sm md:text-base font-bold text-gray-800 focus:outline-none" />
                </div>
             </div>

             {/* 快速狀態 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 flex items-center space-x-4 shadow-sm">
                   <div className="bg-blue-600 p-3 rounded-2xl text-white"><Monitor size={24} /></div>
                   <div><h4 className="font-black text-gray-900 leading-none">TJCDaxi iMac</h4><p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-tighter">Handover System v3.8</p></div>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 flex justify-between items-center shadow-sm">
                   <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Status</span>
                   <div className="flex items-center text-green-600 font-black text-xs"><div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>CONNECTED</div>
                </div>
             </div>
          </div>
        );

      case 'church_news':
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 pb-10">
            <div className="bg-white p-6 rounded-3xl border-l-8 border-amber-400 shadow-sm flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-black text-gray-900 flex items-center"><Calendar className="mr-2 text-amber-500" /> 本會宣布事項</h2>
                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">Last Update: {CHURCH_ANNOUNCEMENTS.updateDate}</p>
              </div>
              <Bell size={24} className="text-amber-200" />
            </div>

            {/* 代禱名單 */}
            <div className="bg-rose-50 rounded-[2rem] p-7 border border-rose-100">
              <h3 className="text-rose-700 font-black mb-5 flex items-center text-sm tracking-widest uppercase"><Heart size={18} className="mr-2" /> 代禱事項 (求主帶領)</h3>
              <div className="grid grid-cols-1 gap-4">
                {CHURCH_ANNOUNCEMENTS.prayers.map((p, i) => (
                  <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-rose-50">
                    <div className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-1">{p.name}</div>
                    <p className="text-sm font-bold text-gray-800 leading-relaxed">{p.list}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 日程表 */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-slate-800 p-5 text-white font-black text-xs flex items-center tracking-widest uppercase">
                <Clock size={16} className="mr-2 text-amber-400" /> 近期活動日程預告
              </div>
              <div className="divide-y divide-gray-50">
                {CHURCH_ANNOUNCEMENTS.events.map((e, i) => (
                  <div key={i} className="p-5 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-blue-600 font-black text-xs tracking-tighter">{e.date}</span>
                      <span className="text-gray-900 font-black text-sm mt-0.5">{e.location}</span>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="bg-gray-100 px-3 py-1 rounded-lg text-[10px] font-black text-gray-500 uppercase">{e.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 財務 */}
            <div className="bg-blue-600 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
               <div className="relative z-10">
                 <h3 className="text-blue-200 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Finance / 財務摘要</h3>
                 <p className="text-2xl font-black">{CHURCH_ANNOUNCEMENTS.finance.monthly}</p>
                 <p className="text-xs text-blue-100 mt-2 font-bold opacity-80">{CHURCH_ANNOUNCEMENTS.finance.status}</p>
               </div>
               <Database size={100} className="absolute right-[-5%] bottom-[-20%] text-white/10 rotate-12" />
            </div>
          </div>
        );

      case 'groups':
        return (
          <div className="space-y-4 animate-in fade-in duration-500">
            <PageHeader title="01 組織組別管理" description="管理資訊股旗下各組別負責人與雲端資料連結。" icon={Users} color="blue" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {GROUPS_DATA.map(g => (
                <div key={g.id} className="p-5 rounded-3xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-all group">
                  <div className="mb-4">
                    <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Star size={16} /></div>
                    <div className="font-black text-gray-800 text-sm">{g.name}</div>
                    <div className="text-[10px] text-gray-400 font-bold mt-1">負責人：{g.leader}</div>
                  </div>
                  <a href={g.folder} target="_blank" rel="noreferrer" className="block text-center py-2.5 bg-gray-50 rounded-xl text-[10px] font-black text-gray-500 hover:bg-blue-600 hover:text-white transition-all uppercase tracking-widest">雲端目錄</a>
                </div>
              ))}
            </div>
          </div>
        );

      case 'membership':
        return (
          <div className="space-y-4 animate-in fade-in duration-500">
            <PageHeader title="02 會籍管理系統" description="包含總會專屬 MMS、實名制登入及本會會籍名簿紀錄。" icon={FileText} color="amber" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MEMBERSHIP_DATA.map(item => {
                const isSpecial = item.id === 'm4' || item.id === 'm5';
                return (
                  <div key={item.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${isSpecial ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'}`}>
                      {item.id === 'm4' ? <LayoutGrid size={24} /> : item.id === 'm5' ? <Fingerprint size={24} /> : <BookOpen size={24} />}
                    </div>
                    <h4 className="font-black text-gray-800 text-sm mb-1">{item.name}</h4>
                    <p className="text-[10px] text-gray-400 font-bold mb-6 leading-relaxed h-8">{item.purpose}</p>
                    <a href={item.link} target={item.link === '#' ? '_self' : '_blank'} className={`block w-full py-3.5 rounded-2xl text-center text-[10px] font-black uppercase tracking-[0.2em] transition-all ${isSpecial ? 'bg-orange-600 text-white shadow-lg shadow-orange-100 hover:bg-orange-700' : 'bg-gray-100 text-gray-400 hover:bg-slate-800 hover:text-white'}`}>
                      {item.link === '#' ? '維護中' : '進入系統'}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            <PageHeader title="03 公文及會議紀錄" description="外部公告系統與內部各單位雲端存檔。" icon={Archive} color="emerald" />
            {DOCUMENT_STRUCTURE.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 bg-emerald-50/50 border-b border-gray-50 flex items-center justify-between">
                  <h3 className="font-black text-gray-700 flex items-center text-[11px] uppercase tracking-widest"><FolderTree size={16} className="mr-2 text-emerald-600" /> {cat.category}</h3>
                  <Info size={14} className="text-emerald-300" />
                </div>
                <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                  {cat.items.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-white border border-transparent hover:border-emerald-100 transition-all group">
                      <span className="font-bold text-xs text-gray-600 group-hover:text-emerald-700">{item.name}</span>
                      <ExternalLink size={14} className="text-gray-300 group-hover:text-emerald-500" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'assets':
        return (
          <div className="space-y-4 animate-in fade-in duration-500">
            <PageHeader title="04 財產與印信保管" description="教會公印與資訊設備盤點清冊。" icon={ShieldCheck} color="rose" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                 <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center mb-6 shadow-inner"><Shield size={40} /></div>
                 <h4 className="font-black text-lg text-gray-800">教會公印 (Official Seal)</h4>
                 <p className="text-xs text-gray-400 font-bold mt-1">目前保管人：資訊股股負責</p>
                 <button className="mt-8 w-full py-4 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">查閱保管日誌</button>
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col">
                 <h4 className="font-black text-xs text-gray-400 uppercase tracking-widest mb-6 border-b pb-3 flex items-center"><Database size={16} className="mr-2 text-rose-500" /> 財產摘要紀錄</h4>
                 <div className="space-y-3">
                   {ASSETS_DATA.map(a => (
                     <div key={a.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="font-black text-xs text-gray-700">{a.name}</span>
                        <span className="bg-white px-3 py-1 rounded-lg text-[10px] font-black text-rose-600 shadow-sm">{a.keeper}</span>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans selection:bg-blue-100 overflow-hidden">
      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-72 bg-white border-r border-gray-200 p-8 flex-col shadow-sm">
        <div className="flex items-center space-x-3 px-2 mb-12">
          <div className="bg-blue-700 p-2.5 rounded-[14px] text-white shadow-xl shadow-blue-200"><Monitor size={22} /></div>
          <div>
            <h1 className="text-sm font-black text-gray-900 leading-none tracking-tighter">TJCDaxi / Info</h1>
            <span className="text-[9px] text-blue-600 uppercase font-black tracking-widest mt-1 block">Handover System</span>
          </div>
        </div>
        <nav className="space-y-1.5 flex-1">
          {NAV_ITEMS.map(item => <SidebarItem key={item.id} {...item} activeTab={activeTab} onClick={setActiveTab} />)}
        </nav>
        <div className="mt-auto pt-8 border-t border-gray-100">
          <div className="text-[9px] text-gray-300 font-mono text-center tracking-widest font-bold uppercase">Host: iMac / v3.8.0-LTS</div>
        </div>
      </aside>

      {/* Main View */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 px-8 py-5 flex justify-between items-center z-30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-gray-900 font-black text-xs uppercase tracking-widest">
              {NAV_ITEMS.find(n => n.id === activeTab)?.label}
            </span>
          </div>
          <div className="flex items-center space-x-4">
             <div className="hidden md:flex bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 text-[10px] font-bold text-gray-400 tracking-tighter uppercase">Cmd + K Search</div>
             <div className="md:hidden bg-blue-700 p-1.5 rounded-lg text-white shadow-lg shadow-blue-100"><Monitor size={16} /></div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-5 md:p-10 pb-32 md:pb-10 scroll-smooth">
          <div className="max-w-5xl mx-auto">
            {renderContent()}
          </div>
        </main>

        {/* Mobile Nav */}
        <nav className="md:hidden flex bg-white/95 backdrop-blur-xl border-t border-gray-100 fixed bottom-0 left-0 right-0 z-50 px-2 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.03)]">
          {NAV_ITEMS.map(item => <BottomNavItem key={item.id} {...item} activeTab={activeTab} onClick={setActiveTab} />)}
        </nav>
      </div>
    </div>
  );
}

