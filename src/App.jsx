import React, { useState, useMemo } from 'react';
import { 
  Users, FileText, Archive, ShieldCheck, Search, 
  ExternalLink, Clock, FolderTree, Home, 
  BookOpen, Settings, Monitor, Bell, Megaphone, ChevronRight,
  Database, LayoutGrid, Fingerprint, Command, X, Menu
} from 'lucide-react';

// 從 data.js 匯入資料
import { 
  NEWS_DATA, 
  GROUPS_DATA, 
  MEMBERSHIP_DATA, 
  DOCUMENT_STRUCTURE, 
  ASSETS_DATA 
} from './data';

// 定義導覽項目，方便多處重複使用
const NAV_ITEMS = [
  { id: 'overview', icon: Home, label: '總覽' },
  { id: 'groups', icon: Users, label: '組織' },
  { id: 'membership', icon: FileText, label: '會籍' },
  { id: 'documents', icon: Archive, label: '公文' },
  { id: 'assets', icon: ShieldCheck, label: '財產' },
];

// --- 輔助組件：側邊欄項目 (電腦版) ---
const SidebarItem = ({ id, icon: Icon, label, activeTab, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      activeTab === id 
      ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'
    }`}
  >
    <Icon size={20} />
    <span className="font-semibold text-sm">{label}</span>
  </button>
);

// --- 輔助組件：底部導覽項目 (手機版) ---
const BottomNavItem = ({ id, icon: Icon, label, activeTab, onClick }) => (
  <button
    onClick={() => onClick(id)}
    className={`flex flex-col items-center justify-center flex-1 py-2 transition-all ${
      activeTab === id ? 'text-blue-600' : 'text-gray-400'
    }`}
  >
    <Icon size={20} className={activeTab === id ? 'scale-110' : ''} />
    <span className="text-[10px] mt-1 font-bold">{label}</span>
  </button>
);

// --- 輔助組件：頁面標題 ---
const PageHeader = ({ title, description, icon: Icon }) => (
  <div className="mb-6 p-5 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex items-center space-x-3 mb-2">
      <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
        <Icon size={20} className="md:w-6 md:h-6" />
      </div>
      <h2 className="text-lg md:text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  // 搜尋過濾邏輯
  const filteredGroups = useMemo(() => {
    if (!searchTerm) return [];
    return GROUPS_DATA.filter(g => 
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      g.leader.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* 消息公告 */}
            <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-4 md:mb-6">
                  <Megaphone size={18} className="text-blue-200" />
                  <h2 className="text-[10px] md:text-xs font-black tracking-widest uppercase text-blue-100">Latest / 最新消息</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <div className="text-[9px] font-bold text-blue-200 uppercase mb-1 flex items-center">
                      <Bell size={10} className="mr-1" /> 收文
                    </div>
                    <p className="text-sm font-bold truncate">{NEWS_DATA.receivedDoc}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                    <div className="text-[9px] font-bold text-blue-200 uppercase mb-1 flex items-center">
                      <Clock size={10} className="mr-1" /> 會議
                    </div>
                    <p className="text-sm font-bold truncate">{NEWS_DATA.meeting}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 搜尋列 */}
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-15 group-focus-within:opacity-30 transition"></div>
              <div className="relative bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                <div className="pl-4 pr-2 text-gray-400"><Search size={20} /></div>
                <input 
                  type="text" 
                  placeholder="搜尋負責人、組別或項目..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 py-3 text-sm md:text-base font-medium text-gray-800 placeholder:text-gray-300 focus:outline-none"
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className="p-2 text-gray-300"><X size={18} /></button>
                )}
              </div>
            </div>

            {/* 搜尋結果 */}
            {searchTerm && (
              <div className="bg-blue-50/50 rounded-2xl p-4 border border-blue-100 space-y-3">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">搜尋結果</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredGroups.map(g => (
                    <div key={g.id} className="bg-white p-3 rounded-xl shadow-sm border border-blue-50 flex justify-between items-center">
                      <span className="text-sm font-bold text-gray-700">{g.name} ({g.leader})</span>
                      <a href={g.folder} target="_blank" rel="noreferrer" className="text-blue-600 p-1"><ExternalLink size={14} /></a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 系統資訊 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-2xl text-white shadow-lg shadow-blue-100">
                  <Monitor size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-black text-gray-900 tracking-tight leading-none mb-1">TJCDaxi iMac</h2>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Handover Environment</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400 font-bold uppercase">Sync Status</span>
                  <span className="text-green-600 font-black flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    ONLINE
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'groups':
        return (
          <div className="space-y-4">
            <PageHeader title="01 組織組別管理" description="管理資訊股旗下各組別負責人與雲端資料。" icon={Users} />
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3">
              {GROUPS_DATA.map(g => (
                <div key={g.id} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-gray-800 text-sm mb-1">{g.name}</div>
                    <div className="text-[10px] text-gray-500 mb-4">負責人：{g.leader}</div>
                  </div>
                  <a href={g.folder} target="_blank" rel="noreferrer" className="block text-center py-2 bg-blue-50 rounded-xl text-[10px] font-black text-blue-600 border border-blue-100 hover:bg-blue-600 hover:text-white transition-all">
                    雲端目錄
                  </a>
                </div>
              ))}
            </div>
          </div>
        );

      case 'membership':
        return (
          <div className="space-y-4">
            <PageHeader title="02 會籍管理" description="包含總會 MMS 與實名制系統。" icon={FileText} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {MEMBERSHIP_DATA.map(item => {
                const isSystem = item.id === 'm4' || item.id === 'm5';
                return (
                  <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${isSystem ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                      {item.id === 'm4' ? <LayoutGrid size={20} /> : item.id === 'm5' ? <Fingerprint size={20} /> : <BookOpen size={20} />}
                    </div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h4>
                    <p className="text-[10px] text-gray-500 mb-6 flex-1 leading-relaxed">{item.purpose}</p>
                    <a 
                      href={item.link} 
                      target={item.link === '#' ? '_self' : '_blank'} 
                      className={`block w-full py-3 rounded-xl text-center text-[10px] font-black uppercase tracking-widest transition-all ${
                        isSystem ? 'bg-orange-600 text-white shadow-lg shadow-orange-100' : 'bg-gray-50 text-gray-400'
                      }`}
                    >
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
          <div className="space-y-6">
            <PageHeader title="03 公文與會議紀錄" description="外部系統與內部存檔。" icon={Archive} />
            {DOCUMENT_STRUCTURE.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                  <h3 className="font-bold text-gray-800 flex items-center text-xs uppercase tracking-widest">
                    <FolderTree size={14} className="mr-2 text-blue-600" /> {cat.category}
                  </h3>
                </div>
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {cat.items.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-white border border-transparent hover:border-blue-100 transition-all group">
                      <span className="font-bold text-[11px] text-gray-600 group-hover:text-blue-700">{item.name}</span>
                      <ChevronRight size={14} className="text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'assets':
        return (
          <div className="space-y-4">
            <PageHeader title="04 財產與印信" description="保管清冊與盤點日誌。" icon={ShieldCheck} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4"><ShieldCheck size={32} /></div>
                <h4 className="font-bold text-gray-800 mb-1">教會公印</h4>
                <p className="text-[10px] text-gray-500 mb-6">資訊股股負責保管</p>
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">交接日誌</button>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 text-xs mb-4 flex items-center uppercase tracking-widest border-b pb-2"><Database size={14} className="mr-2 text-blue-600" /> 財產摘要</h4>
                <div className="space-y-2">
                  {ASSETS_DATA.map(a => (
                    <div key={a.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl text-[10px]">
                      <span className="font-bold text-gray-700">{a.name}</span>
                      <span className="text-gray-500 font-bold">{a.keeper}</span>
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
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100 overflow-hidden">
      {/* 電腦版側邊導覽 (md 以上顯示) */}
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 p-8 flex-col shadow-sm">
        <div className="flex items-center space-x-3 px-2 mb-12">
          <div className="bg-blue-700 p-2.5 rounded-[14px] text-white shadow-xl shadow-blue-200">
            <Monitor size={22} />
          </div>
          <div>
            <h1 className="text-sm font-black text-gray-900 leading-none">TJCDaxi / Info</h1>
            <span className="text-[9px] text-blue-600 uppercase font-black tracking-[0.2em] mt-1 block">資訊股交接系統</span>
          </div>
        </div>
        
        <nav className="space-y-1 flex-1">
          {NAV_ITEMS.map(item => (
            <SidebarItem key={item.id} {...item} activeTab={activeTab} onClick={setActiveTab} />
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-50">
          <div className="text-[9px] text-gray-300 font-mono text-center uppercase tracking-widest">Host: iMac / v3.5.0</div>
        </div>
      </aside>

      {/* 主內容區塊 */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* 頂部 Header */}
        <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-40 px-6 md:px-10 py-4 md:py-5 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="hidden md:inline text-gray-300 font-medium text-sm">System</span>
            <span className="hidden md:inline text-gray-300 font-medium text-sm">/</span>
            <span className="text-gray-900 font-black text-sm uppercase tracking-tighter">
              {NAV_ITEMS.find(n => n.id === activeTab)?.label || activeTab}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="hidden md:flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                <Search size={14} className="text-gray-300" />
                <span className="text-[10px] font-bold text-gray-400">CMD + K 搜尋</span>
             </div>
             {/* 手機版小 Logo */}
             <div className="md:hidden bg-blue-700 p-1.5 rounded-lg text-white">
                <Monitor size={16} />
             </div>
          </div>
        </header>
        
        {/* 主要內容滾動區 */}
        <main className="flex-1 overflow-y-auto p-5 md:p-10 pb-24 md:pb-10 scroll-smooth">
          <div className="max-w-6xl mx-auto">
            {renderContent()}
          </div>
        </main>

        {/* 手機版底部導覽 (md 以下顯示) */}
        <nav className="md:hidden flex bg-white/90 backdrop-blur-xl border-t border-gray-100 fixed bottom-0 left-0 right-0 z-50 px-2 pb-safe shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
          {NAV_ITEMS.map(item => (
            <BottomNavItem key={item.id} {...item} activeTab={activeTab} onClick={setActiveTab} />
          ))}
        </nav>
      </div>
    </div>
  );
}
