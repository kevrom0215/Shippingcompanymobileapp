import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Plus,
  Save,
  Package,
  Truck,
  MapPin,
  BarChart3,
  FileText,
  Zap,
  Brain,
  AlertCircle,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';

interface CreateActionPageProps {
  onBack: () => void;
}

export function CreateActionPage({ onBack }: CreateActionPageProps) {
  const [actionName, setActionName] = useState('');
  const [actionDescription, setActionDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('Package');
  const [selectedColor, setSelectedColor] = useState('from-blue-500 to-cyan-500');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const iconOptions = [
    { name: 'Package', icon: Package, color: 'from-blue-500 to-cyan-500' },
    { name: 'Truck', icon: Truck, color: 'from-teal-500 to-cyan-500' },
    { name: 'MapPin', icon: MapPin, color: 'from-emerald-500 to-green-500' },
    { name: 'BarChart', icon: BarChart3, color: 'from-purple-500 to-pink-500' },
    { name: 'FileText', icon: FileText, color: 'from-orange-500 to-amber-500' },
    { name: 'Zap', icon: Zap, color: 'from-violet-500 to-purple-500' },
    { name: 'Brain', icon: Brain, color: 'from-pink-500 to-rose-500' },
    { name: 'Clock', icon: Clock, color: 'from-amber-500 to-orange-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 2 seconds and go back
      setTimeout(() => {
        setIsSuccess(false);
        onBack();
      }, 2000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-emerald-500/50 ring-8 ring-emerald-400/20 animate-pulse">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Action Created!</h2>
          <p className="text-purple-200">Your new action has been added</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="relative backdrop-blur-xl bg-white/10 border-b border-white/10 sticky top-0 z-10">
        <div className="px-4 py-4 flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-xl transition-colors backdrop-blur-sm"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-white">Create New Action</h1>
            <p className="text-xs text-purple-200">Design your custom action</p>
          </div>
        </div>
      </div>

      <div className="relative p-4 space-y-6 pb-20">
        {/* AI Suggestion */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-4 border border-purple-400/30 shadow-xl">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-purple-200 mb-1">AI Tip</p>
              <p className="text-xs text-purple-100">
                Create actions that match your workflow. Popular actions include alerts, tracking, and reports.
              </p>
            </div>
          </div>
        </div>

        {/* Preview Card */}
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 shadow-xl">
          <h4 className="text-sm font-semibold text-white mb-3">Preview</h4>
          <button className="relative w-full backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 text-left group overflow-hidden shadow-xl">
            <div className={`absolute inset-0 bg-gradient-to-br ${selectedColor} opacity-20`}></div>
            <div className="relative">
              <div className={`w-12 h-12 bg-gradient-to-br ${selectedColor} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                {React.createElement(iconOptions.find(i => i.name === selectedIcon)?.icon || Package, {
                  className: 'w-6 h-6 text-white'
                })}
              </div>
              <h4 className="font-semibold text-white text-sm mb-1">
                {actionName || 'Action Name'}
              </h4>
              <p className="text-xs text-white/60">
                {actionDescription || 'Action description'}
              </p>
            </div>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 shadow-xl space-y-4">
            <div className="space-y-2">
              <Label htmlFor="actionName" className="text-white/90">
                Action Name
              </Label>
              <Input
                id="actionName"
                value={actionName}
                onChange={(e) => setActionName(e.target.value)}
                placeholder="e.g., Inventory Check"
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm focus:bg-white/10 focus:border-cyan-400/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="actionDescription" className="text-white/90">
                Description
              </Label>
              <Textarea
                id="actionDescription"
                value={actionDescription}
                onChange={(e) => setActionDescription(e.target.value)}
                placeholder="Brief description of what this action does..."
                rows={3}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm focus:bg-white/10 focus:border-cyan-400/50 resize-none"
                required
              />
            </div>
          </div>

          {/* Icon Selection */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 shadow-xl">
            <Label className="text-white/90 mb-3 block">Select Icon & Color</Label>
            <div className="grid grid-cols-4 gap-2">
              {iconOptions.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => {
                    setSelectedIcon(option.name);
                    setSelectedColor(option.color);
                  }}
                  className={`relative aspect-square backdrop-blur-xl rounded-xl p-2 border transition-all active:scale-95 ${
                    selectedIcon === option.name
                      ? 'border-cyan-400 bg-white/10'
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-20 rounded-xl`}></div>
                  <div className="relative h-full flex items-center justify-center">
                    <option.icon className="w-6 h-6 text-white" />
                  </div>
                  {selectedIcon === option.name && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-slate-900" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Action Type */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-4 border border-white/10 shadow-xl">
            <Label className="text-white/90 mb-3 block">Action Type</Label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Alert', badge: 'Quick' },
                { label: 'Report', badge: 'Detailed' },
                { label: 'Task', badge: 'Workflow' },
                { label: 'Custom', badge: 'Flexible' },
              ].map((type) => (
                <button
                  key={type.label}
                  type="button"
                  className="backdrop-blur-xl bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/30 transition-all active:scale-95 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">{type.label}</span>
                    <Badge variant="outline" className="text-xs border-cyan-400/50 text-cyan-300 bg-cyan-500/20">
                      {type.badge}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !actionName || !actionDescription}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/60 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                Creating...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Create Action
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
