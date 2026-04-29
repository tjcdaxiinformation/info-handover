import React, { useState } from 'react';
import { 
  Users, FileText, Archive, ShieldCheck, Plus, Search, 
  ExternalLink, Clock, FolderTree, AlertCircle, Home, 
  BookOpen, Settings, Monitor, Bell, Megaphone, ChevronRight,
  Database, LayoutGrid, Fingerprint, Command
} from 'lucide-react';

// 從 data.js 匯入資料
import { 
  NEWS_DATA, 
  GROUPS_DATA, 
  MEMBERSHIP_DATA, 
  DOCUMENT_STRUCTURE, 
  ASSETS_DATA 
} from './data';

// --- 輔助組件：側邊欄項目 ---
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

// --- 輔助組件：頁面標題 ---
const PageHeader = ({ title, description, icon: Icon }) => (
  <div className="mb-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div className="flex items-center space-x-3 mb-2">
      <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
    </div>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

// --- 主程式 ---
export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* 1. 最新消息公告 */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <Megaphone size={18} className="text-blue-200" />
                <h2 className="text-sm font-black tracking-widest uppercase text-blue-100">最新消息公告</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-[10px] font-bold text-blue-200 uppercase mb-1 flex items-center">
                    <Bell size={10} className="mr-1" /> 最新收文
                  </div>
                  <p className="text-sm font-semibold truncate">{NEWS_DATA.receivedDoc}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <div className="text-[10px] font-bold text-blue-200 uppercase mb-1 flex items-center">
                    <Clock size={10} className="mr-1" /> 最新會議記錄
                  </div>
                  <p className="text-sm font-semibold truncate">{NEWS_DATA.meeting}</p>
                </div>
              </div>
            </div>

            {/* 2. 大型搜尋列區塊 (新功能) */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-focus-within:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                    <Search size={24} />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="搜尋交接資料、規章或雲端連結..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full text-lg font-medium text-gray-800 placeholder:text-gray-300 focus:outline-none"
                    />
                  </div>
                  <div className="hidden md:flex items-center space-x-1 text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <Command size={12} />
                    <span className="text-[10px] font-bold">K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. 系統資訊卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center">
                <div className="flex items-center space-x-3 mb-2">
                  <Monitor className="text-blue-600" size={28} />
                  <h2 className="text-2xl font-bold text-gray-800">TJCDaxi iMac 資訊股交接總覽</h2>
                </div>
                <p className="text-gray-500 text-sm italic">「凡事都要規規矩矩地按著次序行。」 — 林前 14:40</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold mb-4 flex items-center text-gray-800 text-sm uppercase tracking-wider">
                  <Settings size={16} className="mr-2 text-blue-600" /> 系統資訊 (Host Info)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">主機</span>
                    <span className="font-bold text-blue-700">TJCDaxi iMac</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500">同步狀態</span>
                    <span className="text-green-600 font-bold flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      ONLINE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'groups':
        return (
          <div className="space-y-4">
            <PageHeader title="01 組織組別管理" description="管理資訊股旗下各組別負責人與雲端資料同步。" icon={Users} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {GROUPS_DATA.map(g => (
                <div key={g.id} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="font-bold text-gray-800 mb-1">{g.name}</div>
                  <div className="text-xs text-gray-500 mb-4">負責人：{g.leader}</div>
                  <a href={g.folder} target="_blank" rel="noreferrer" className="block text-center py-2.5 bg-blue-50 rounded-xl text-xs font-bold text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                    開啟雲端目錄
                  </a>
                </div>
              ))}
            </div>
          </div>
        );

      case 'membership':
        return (
          <div className="space-y-4">
            <PageHeader title="02 會籍管理" description="負責信徒遷出入、名簿整理及年度統計表呈報。包含總會 MMS 與實名制系統連結。" icon={FileText} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MEMBERSHIP_DATA.map(item => {
                const isSystem = item.id === 'm4' || item.id === 'm5';
                return (
                  <div key={item.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-blue-200 transition-all group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isSystem ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                      {item.id === 'm4' ? <LayoutGrid size={24} /> : item.id === 'm5' ? <Fingerprint size={24} /> : <BookOpen size={24} />}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{item.name}</h4>
                    <p className="text-xs text-gray-500 mb-6 h-8 leading-relaxed">{item.purpose}</p>
                    <a 
                      href={item.link} 
                      target={item.link === '#' ? '_self' : '_blank'} 
                      rel="noreferrer"
                      className={`block w-full py-3 rounded-xl text-center text-xs font-black uppercase tracking-wider transition-all ${
                        isSystem 
                        ? 'bg-orange-600 text-white shadow-lg shadow-orange-100 hover:bg-orange-700' 
                        : 'bg-gray-50 text-gray-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-100'
                      }`}
                    >
                      {item.link === '#' ? '維護中' : '立即進入系統'}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-8">
            <PageHeader title="03 公文與會議紀錄" description="包含總會收發文、職務會及股務會議之電子存檔。" icon={Archive} />
            {DOCUMENT_STRUCTURE.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-50 bg-gray-50/50">
                  <h3 className="font-bold text-gray-800 flex items-center text-sm">
                    <FolderTree size={16} className="mr-2 text-blue-600" /> {cat.category}
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.items.map((item, i) => (
                    <a key={i} href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white hover:border-blue-200 hover:shadow-sm transition-all group">
                      <span className="font-bold text-xs text-gray-700 group-hover:text-blue-700">{item.name}</span>
                      <ChevronRight size={14} className="text-gray-300 group-hover:text-blue-500" />
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
            <PageHeader title="04 財產與印信" description="教會公印與資訊設備之實體盤點與保管清冊。" icon={ShieldCheck} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm">
                <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4"><ShieldCheck size={40} /></div>
                <h4 className="font-bold text-xl mb-1 text-gray-800">教會公印</h4>
                <p className="text-sm text-gray-500 mb-6">由「資訊股股負責」保管中</p>
                <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold">查閱交接日誌</button>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-800 mb-4 flex items-center border-b pb-2 text-sm"><Database size={16} className="mr-2 text-blue-600" /> 財產摘要</h4>
                <div className="space-y-3">
                  {ASSETS_DATA.map(a => (
                    <div key={a.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs">
                      <span className="font-bold text-gray-700">{a.name}</span>
                      <span className="text-gray-500">{a.keeper}</span>
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
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100">
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col shadow-sm">
        <div className="flex items-center space-x-3 px-2 mb-10">
          <div className="bg-blue-700 p-2 rounded-xl text-white shadow-lg shadow-blue-100">
            <Monitor size={20} />
          </div>
          <div>
            <h1 className="text-sm font-black text-gray-900 leading-none">TJCDaxi / Info</h1>
            <span className="text-[10px] text-blue-600 uppercase font-bold tracking-widest">資訊股交接系統</span>
          </div>
        </div>
        
        <nav className="space-y-1.5 flex-1 text-sm font-medium">
          <SidebarItem id="overview" icon={Home} label="主機總覽" activeTab={activeTab} onClick={setActiveTab} />
          <div className="pt-6 pb-2 px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">交接規章分區</div>
          <SidebarItem id="groups" icon={Users} label="01 組織組別" activeTab={activeTab} onClick={setActiveTab} />
          <SidebarItem id="membership" icon={FileText} label="02 會籍管理" activeTab={activeTab} onClick={setActiveTab} />
          <SidebarItem id="documents" icon={Archive} label="03 公文會議" activeTab={activeTab} onClick={setActiveTab} />
          <SidebarItem id="assets" icon={ShieldCheck} label="04 財產印信" activeTab={activeTab} onClick={setActiveTab} />
        </nav>
      </aside>

      <div className="flex-1 overflow-auto bg-[#F8FAFC]">
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10 px-8 py-4 flex justify-between items-center text-sm font-bold">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400 font-medium">Repository</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 uppercase tracking-tighter">{activeTab}</span>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-500" size={14} />
            <input
              type="text"
              placeholder="快速搜尋..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-[10px] w-48 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all"
            />
          </div>
        </header>
        
        <main className="p-8 max-w-6xl mx-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
