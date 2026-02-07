import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Dashboard } from './components/Dashboard';
import { ActionPage } from './components/ActionPage';
import { CreateActionPage } from './components/CreateActionPage';

type Page = 'login' | 'dashboard' | 'action' | 'createAction';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [selectedAction, setSelectedAction] = useState<string>('');

  const handleLogin = () => {
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const handleActionClick = (actionType: string) => {
    setSelectedAction(actionType);
    setCurrentPage('action');
  };

  const handleCreateAction = () => {
    setCurrentPage('createAction');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
    setSelectedAction('');
  };

  return (
    <div className="size-full">
      {currentPage === 'login' && (
        <LoginPage onLogin={handleLogin} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard 
          onLogout={handleLogout}
          onActionClick={handleActionClick}
          onCreateAction={handleCreateAction}
        />
      )}
      {currentPage === 'action' && (
        <ActionPage 
          actionType={selectedAction}
          onBack={handleBackToDashboard}
        />
      )}
      {currentPage === 'createAction' && (
        <CreateActionPage onBack={handleBackToDashboard} />
      )}
    </div>
  );
}
