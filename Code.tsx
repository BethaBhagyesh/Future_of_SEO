import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { 
  TrendingDown, 
  TrendingUp, 
  DollarSign, 
  AlertTriangle, 
  Shield, 
  Users, 
  Building2, 
  Plane, 
  BarChart3, 
  PieChart, 
  Calendar, 
  Target,
  FileText,
  Globe,
  Briefcase,
  Activity,
  Clock,
  MapPin,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart as RechartsPieChart, 
  Cell, 
  Area, 
  AreaChart,
  ComposedChart,
  Legend
} from 'recharts';
import { CitationLink } from '@/components/ui/citation';

const citations = {
  1: {
    title: "Air India Flight 171 - Wikipedia",
    url: "https://en.wikipedia.org/wiki/Air_India_Flight_171",
    content: "Air India Flight 171 (AI171) crashed on June 12, 2025, at Ahmedabad after takeoff, killing 241 onboard + 19 on ground. Boeing 787-8 Dreamliner lost thrust due to fuel cutoff switches moving to cutoff position.",
    date: "Retrieved 2025",
    siteName: "Wikipedia",
    sourceContent: "Flight 171 crash overview and preliminary findings"
  },
  2: {
    title: "The Hindu: Ahmedabad plane crash live updates",
    url: "https://www.thehindu.com/news/national/ahmedabad-air-india-plane-crash-deaths-vijay-rupani-funeral-live-updates/article69686204.ece",
    content: "Comprehensive coverage of Air India Flight 171 crash, rescue operations, and victim identification processes at B.J. Medical College campus.",
    date: "June 2025",
    siteName: "The Hindu",
    sourceContent: "Live updates and comprehensive incident coverage"
  },
  3: {
    title: "Air India plane crash: Victims' kin may get up to Rs 1.5 cr each as insurance compensation",
    url: "https://indianexpress.com/article/business/aviation/air-india-plane-crash-victims-kin-may-get-up-to-rs-1-5-cr-each-as-insurance-compensation-10063788/",
    content: "Details on insurance compensation process for Air India Flight 171 crash victims, with families potentially receiving up to Rs 1.5 crore each in insurance payouts.",
    date: "June 13, 2025",
    siteName: "The Indian Express",
    sourceContent: "Insurance compensation and financial impact coverage"
  },
  4: {
    title: "List of Major Air India Disasters - Britannica",
    url: "https://www.britannica.com/topic/List-of-Major-Air-India-Disasters",
    content: "Historical context of Air India accidents including Flight 171 as the first fatal crash involving Boeing 787 and first Air India crash since Tata Group acquisition.",
    date: "2025",
    siteName: "Britannica",
    sourceContent: "Historical aviation incident analysis"
  },
  5: {
    title: "AAIB India Preliminary Report VT-ANB",
    url: "https://aaib.gov.in/What's%20New%20Assets/Preliminary%20Report%20VT-ANB.pdf",
    content: "Official preliminary investigation report detailing technical aspects of fuel cutoff switch failure and flight recorder analysis.",
    date: "2025",
    siteName: "AAIB India",
    sourceContent: "Official accident investigation findings"
  }
};

const imageResources = {
  crashSite: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/The_wreckage_of_the_crashed_Air_India_Flight_171.jpg/250px-The_wreckage_of_the_crashed_Air_India_Flight_171.jpg",
  aircraft: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Air_India_787-8_%28VT-ANB%29.jpg/250px-Air_India_787-8_%28VT-ANB%29.jpg",
  debrisMap: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Figure_2_Wreckage_layout.png/250px-Figure_2_Wreckage_layout.png",
  rescue: "https://www.thehindu.com/theme/images/th-online/1x1_spacer.png",
  victims: "https://images.indianexpress.com/2025/06/family-members-of-one-of-the-victims-in-Ahmedabad.-Reuters.jpg?w=640"
};

const FinancialImpactReport = () => {
  const [activePhase, setActivePhase] = useState(0);

  // Financial Impact Data
  const immediateFinancialImpact = [
    { category: 'Aircraft Loss', amount: 248, description: 'Boeing 787-8 hull loss' },
    { category: 'Passenger Compensation', amount: 362, description: '241 fatalities × ₹1.5cr' },
    { category: 'Ground Victim Compensation', amount: 28.5, description: '19 ground fatalities × ₹1.5cr' },
    { category: 'Property Damage', amount: 15, description: 'B.J. Medical College infrastructure' },
    { category: 'Emergency Response', amount: 8, description: 'Rescue operations and medical care' },
    { category: 'Legal & Investigation', amount: 12, description: 'Investigation costs and legal fees' }
  ];

  const totalImmediateImpact = immediateFinancialImpact.reduce((sum, item) => sum + item.amount, 0);

  const stockImpactData = [
    { date: 'Jun 11', airIndia: 100, boeing: 100 },
    { date: 'Jun 12', airIndia: 85, boeing: 92 },
    { date: 'Jun 13', airIndia: 78, boeing: 88 },
    { date: 'Jun 14', airIndia: 82, boeing: 90 },
    { date: 'Jun 17', airIndia: 88, boeing: 94 },
    { date: 'Jun 24', airIndia: 92, boeing: 96 },
    { date: 'Jul 1', airIndia: 95, boeing: 98 }
  ];

  const compensationBreakdown = [
    { name: 'Passenger Families', value: 362, color: '#ef4444' },
    { name: 'Ground Victims', value: 28.5, color: '#f97316' },
    { name: 'Property Damage', value: 15, color: '#eab308' },
    { name: 'Medical/Rescue', value: 8, color: '#22c55e' }
  ];

  const recoveryProjections = [
    { quarter: 'Q2 2025', revenue: -45, costs: 120, netImpact: -165 },
    { quarter: 'Q3 2025', revenue: -25, costs: 80, netImpact: -105 },
    { quarter: 'Q4 2025', revenue: -15, costs: 40, netImpact: -55 },
    { quarter: 'Q1 2026', revenue: -8, costs: 25, netImpact: -33 },
    { quarter: 'Q2 2026', revenue: -5, costs: 15, netImpact: -20 },
    { quarter: 'Q3 2026', revenue: 0, costs: 10, netImpact: -10 }
  ];

  const phases = [
    "Phase 1: Baseline Analysis",
    "Phase 2: Immediate Impact Assessment", 
    "Phase 3: Stakeholder Impact Analysis",
    "Phase 4: Recovery Pattern Analysis",
    "Phase 5: Financial Metrics Deep Dive",
    "Phase 6: Crisis Management Evaluation",
    "Phase 7: Strategic Recommendations"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Air India Flight 171 Ahmedabad Crash
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-700 mb-4">
              Comprehensive Financial Impact Analysis Report
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Incident Date: June 12, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Location: Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-1">
                <Plane className="w-4 h-4" />
                <span>Aircraft: Boeing 787-8 Dreamliner</span>
              </div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">260</div>
              <div className="text-sm text-red-700">Total Fatalities</div>
              <div className="text-xs text-gray-600 mt-1">241 onboard + 19 ground</div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Overview with Images */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            Incident Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 mb-4">
                Air India Flight 171, a Boeing 787-8 Dreamliner (VT-ANB), crashed into the B.J. Medical College campus in Ahmedabad approximately 30 seconds after takeoff on June 12, 2025. The aircraft lost thrust when both fuel cutoff switches moved from "run" to "cutoff" position, resulting in the first fatal crash of a Boeing 787 since its introduction <CitationLink id="1" callType="quote" citations={citations}/>.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold">Route:</span> Ahmedabad → London Gatwick
                </div>
                <div>
                  <span className="font-semibold">Total Onboard:</span> 242 (230 passengers, 12 crew)
                </div>
                <div>
                  <span className="font-semibold">Survivors:</span> 1 passenger (Vishwash Kumar Ramesh)
                </div>
                <div>
                  <span className="font-semibold">Ground Impact:</span> B.J. Medical College hostel buildings
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <img 
                src={imageResources.crashSite} 
                alt="Crash site with tail section in building" 
                className="w-full rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-600 italic">
                The tail section of Flight 171 wedged in hostel building, inspected by PM Modi <CitationLink id="2" callType="quote" citations={citations}/>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase Navigation */}
      <Card>
        <CardHeader>
          <CardTitle>7-Phase Analysis Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`p-3 text-left rounded-lg border transition-all ${
                  activePhase === index 
                    ? 'bg-blue-50 border-blue-300 text-blue-900' 
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="font-semibold text-sm">{phase}</div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Phase 1: Baseline Analysis */}
      {activePhase === 0 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-500" />
                Phase 1: Baseline Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Air India Pre-Incident Financial Position</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="font-semibold text-blue-900">Tata Group Acquisition (2022)</div>
                      <div className="text-sm text-blue-700">₹18,000 crore investment for Air India privatization</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="font-semibold text-green-900">Fleet Modernization</div>
                      <div className="text-sm text-green-700">₹35,000 crore investment in new aircraft and upgrades</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="font-semibold text-yellow-900">Route Expansion</div>
                      <div className="text-sm text-yellow-700">Aggressive international route expansion strategy</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Boeing 787 Program Status</h3>
                  <div className="space-y-3">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="font-semibold text-purple-900">Safety Record</div>
                      <div className="text-sm text-purple-700">First fatal accident since 2011 service entry</div>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <div className="font-semibold text-indigo-900">Market Position</div>
                      <div className="text-sm text-indigo-700">Leading wide-body aircraft with 1,000+ deliveries</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="font-semibold text-red-900">Previous Issues</div>
                      <div className="text-sm text-red-700">FAA warnings on fuel switch disengagement (SAIB NM-18-33)</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pre-Incident Risk Assessment Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Risk Factor</th>
                      <th className="text-left p-2">Air India</th>
                      <th className="text-left p-2">Boeing</th>
                      <th className="text-left p-2">Impact Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Technical Reliability</td>
                      <td className="p-2">High confidence in 787 fleet</td>
                      <td className="p-2">Known fuel switch issues</td>
                      <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Financial Exposure</td>
                      <td className="p-2">Major fleet investment</td>
                      <td className="p-2">Program profitability</td>
                      <td className="p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded">High</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">Regulatory Environment</td>
                      <td className="p-2">Post-privatization scrutiny</td>
                      <td className="p-2">Enhanced FAA oversight</td>
                      <td className="p-2"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="p-2 font-medium">Market Position</td>
                      <td className="p-2">Rebuilding brand trust</td>
                      <td className="p-2">787 market leadership</td>
                      <td className="p-2"><span className="bg-red-100 text-red-800 px-2 py-1 rounded">High</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Phase 2: Immediate Impact Assessment */}
      {activePhase === 1 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-red-500" />
                Phase 2: Immediate Impact Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Alert className="mb-6">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Critical Financial Impact</AlertTitle>
                <AlertDescription>
                  Total immediate financial impact estimated at ₹{totalImmediateImpact.toFixed(1)} crores (≈$800M USD) within 48 hours of the incident.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Immediate Cost Breakdown</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={immediateFinancialImpact}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="category" 
                        angle={-45}
                        textAnchor="end"
                        height={80}
                        fontSize={10}
                      />
                      <YAxis />
                      <Tooltip 
                        formatter={(value, name) => [`₹${value} crores`, 'Amount']}
                        labelFormatter={(label) => `Category: ${label}`}
                      />
                      <Bar dataKey="amount" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Impact Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Tooltip formatter={(value) => [`₹${value} crores`, 'Amount']} />
                      <RechartsPieChart data={compensationBreakdown}>
                        {compensationBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </RechartsPieChart>
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Detailed Cost Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {immediateFinancialImpact.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="font-semibold text-gray-900">{item.category}</div>
                      <div className="text-2xl font-bold text-red-600">₹{item.amount} cr</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stock Market Reaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <img 
                  src={imageResources.victims} 
                  alt="Family members of victims" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
                <p className="text-xs text-gray-600 italic text-center mt-2">
                  Family members of crash victims in Ahmedabad <CitationLink id="3" callType="quote" citations={citations}/>
                </p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={stockImpactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[75, 105]} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Stock Price']} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="airIndia" 
                    stroke="#ef4444" 
                    strokeWidth={3}
                    name="Air India (Tata)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="boeing" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    name="Boeing"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-red-900">Air India Impact</div>
                  <div className="text-sm text-red-700">22% initial drop, gradual recovery to -5% by month end</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-semibold text-blue-900">Boeing Impact</div>
                  <div className="text-sm text-blue-700">12% initial drop, faster recovery to -2% by month end</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Phase 3: Stakeholder Impact Analysis */}
      {activePhase === 2 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-500" />
                Phase 3: Stakeholder Impact Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Primary Stakeholders</h3>
                  <div className="space-y-4">
                    <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-red-900">Victim Families</span>
                      </div>
                      <div className="text-sm text-red-700">
                        • 241 passenger families + 19 ground victim families<br/>
                        • Compensation up to ₹1.5 crore per family <CitationLink id="3" callType="quote" citations={citations}/><br/>
                        • Long-term psychological and financial support needs
                      </div>
                    </div>

                    <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-orange-600" />
                        <span className="font-semibold text-orange-900">Tata Group/Air India</span>
                      </div>
                      <div className="text-sm text-orange-700">
                        • Brand reputation severely impacted<br/>
                        • First fatal accident since privatization<br/>
                        • ₹18,000 crore investment at risk
                      </div>
                    </div>

                    <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Plane className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-blue-900">Boeing Corporation</span>
                      </div>
                      <div className="text-sm text-blue-700">
                        • First fatal 787 accident impacts program reputation<br/>
                        • Potential design liability for fuel switch system<br/>
                        • Global 787 fleet scrutiny and potential modifications
                      </div>
                    </div>

                    <div className="border border-green-200 bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-900">Insurance Companies</span>
                      </div>
                      <div className="text-sm text-green-700">
                        • Hull insurance payout: ≈₹248 crores<br/>
                        • Liability insurance claims: ≈₹400+ crores<br/>
                        • Premium increases for aviation sector
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Secondary Stakeholders</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">Aviation Industry</div>
                      <div className="text-sm text-gray-700">
                        • Enhanced safety protocols industry-wide<br/>
                        • Increased regulatory scrutiny<br/>
                        • Potential impact on 787 orders globally
                      </div>
                    </div>

                    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">Indian Government</div>
                      <div className="text-sm text-gray-700">
                        • DGCA investigation and oversight<br/>
                        • Aviation safety policy review<br/>
                        • International aviation relations impact
                      </div>
                    </div>

                    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">B.J. Medical College</div>
                      <div className="text-sm text-gray-700">
                        • Infrastructure damage and reconstruction<br/>
                        • Student and staff trauma counseling<br/>
                        • Academic session disruption
                      </div>
                    </div>

                    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-900 mb-2">Ahmedabad Community</div>
                      <div className="text-sm text-gray-700">
                        • Local economic impact<br/>
                        • Airport operations disruption<br/>
                        • Tourism and business confidence
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <img 
                  src={imageResources.rescue} 
                  alt="Rescue operations at crash site" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                />
                <p className="text-xs text-gray-600 italic text-center mt-2">
                  Massive rescue operations at B.J. Medical College campus involving over 300 personnel <CitationLink id="2" callType="quote" citations={citations}/>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Stakeholder Financial Exposure Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-3">Stakeholder</th>
                      <th className="text-left p-3">Direct Costs (₹ crores)</th>
                      <th className="text-left p-3">Indirect Costs (₹ crores)</th>
                      <th className="text-left p-3">Timeline</th>
                      <th className="text-left p-3">Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Air India/Tata</td>
                      <td className="p-3">450</td>
                      <td className="p-3">200-300</td>
                      <td className="p-3">Immediate-5 years</td>
                      <td className="p-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Boeing</td>
                      <td className="p-3">100-150</td>
                      <td className="p-3">500-1000</td>
                      <td className="p-3">1-10 years</td>
                      <td className="p-3"><span className="bg-red-100 text-red-800 px-2 py-1 rounded">High</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Insurance Sector</td>
                      <td className="p-3">650</td>
                      <td className="p-3">100</td>
                      <td className="p-3">1-3 years</td>
                      <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">B.J. Medical College</td>
                      <td className="p-3">15</td>
                      <td className="p-3">25</td>
                      <td className="p-3">1-2 years</td>
                      <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Aviation Industry</td>
                      <td className="p-3">50</td>
                      <td className="p-3">200-500</td>
                      <td className="p-3">2-5 years</td>
                      <td className="p-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Phase 4: Recovery Pattern Analysis */}
      {activePhase === 3 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-green-500" />
                Phase 4: Recovery Pattern Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Financial Recovery Projections</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={recoveryProjections}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [`₹${Math.abs(value)} crores`, name]} />
                    <Legend />
                    <Bar dataKey="costs" fill="#ef4444" name="Additional Costs" />
                    <Bar dataKey="revenue" fill="#f97316" name="Revenue Impact" />
                    <Line 
                      type="monotone" 
                      dataKey="netImpact" 
                      stroke="#22c55e" 
                      strokeWidth={3}
                      name="Net Financial Impact"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Air India Recovery Strategy</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="font-semibold text-blue-900 mb-2">Immediate Actions (0-3 months)</div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Fleet-wide safety audits and modifications</li>
                        <li>• Enhanced crew training programs</li>
                        <li>• Victim compensation fund establishment</li>
                        <li>• Crisis communication campaign</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-900 mb-2">Short-term Recovery (3-12 months)</div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Route optimization and capacity management</li>
                        <li>• Customer confidence rebuilding initiatives</li>
                        <li>• Insurance claim settlements</li>
                        <li>• Regulatory compliance enhancement</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="font-semibold text-purple-900 mb-2">Long-term Strategy (1-3 years)</div>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Brand repositioning and marketing investment</li>
                        <li>• Technology upgrades and fleet modernization</li>
                        <li>• Strategic partnerships and alliances</li>
                        <li>• Market expansion in safer segments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Boeing Recovery Approach</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-900 mb-2">Technical Response</div>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Fuel switch system redesign and retrofit</li>
                        <li>• Service bulletins and airworthiness directives</li>
                        <li>• Enhanced maintenance procedures</li>
                        <li>• Pilot training program updates</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="font-semibold text-orange-900 mb-2">Commercial Strategy</div>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Customer support and compensation</li>
                        <li>• Production rate adjustments</li>
                        <li>• Supply chain impact management</li>
                        <li>• New order negotiations and pricing</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="font-semibold text-yellow-900 mb-2">Regulatory Engagement</div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Cooperation with global aviation authorities</li>
                        <li>• Safety management system enhancements</li>
                        <li>• Certification process improvements</li>
                        <li>• Industry safety initiatives leadership</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Historical Recovery Benchmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-3">Incident</th>
                      <th className="text-left p-3">Year</th>
                      <th className="text-left p-3">Airline Recovery Time</th>
                      <th className="text-left p-3">Manufacturer Impact</th>
                      <th className="text-left p-3">Key Lessons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Air India Flight 182</td>
                      <td className="p-3">1985</td>
                      <td className="p-3">3-5 years</td>
                      <td className="p-3">Boeing 747 - Minimal</td>
                      <td className="p-3">Security focus, brand resilience</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">AI Express 812</td>
                      <td className="p-3">2010</td>
                      <td className="p-3">2-3 years</td>
                      <td className="p-3">Boeing 737 - Limited</td>
                      <td className="p-3">Training emphasis, route safety</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Ethiopian 737 MAX</td>
                      <td className="p-3">2019</td>
                      <td className="p-3">1-2 years</td>
                      <td className="p-3">Boeing - Severe (2+ years)</td>
                      <td className="p-3">Manufacturer liability, design flaws</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">MH370/MH17</td>
                      <td className="p-3">2014</td>
                      <td className="p-3">4-6 years</td>
                      <td className="p-3">Boeing 777 - Moderate</td>
                      <td className="p-3">Crisis communication critical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-900 mb-2">Recovery Timeline Projection for AI171</div>
                <div className="text-sm text-blue-700">
                  Based on historical patterns and the severity of this incident, Air India's recovery is projected to take 3-4 years for full passenger confidence restoration, while Boeing's 787 program may face 2-3 years of enhanced scrutiny and potential order impacts.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Phase 5: Financial Metrics Deep Dive */}
      {activePhase === 4 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-indigo-500" />
                Phase 5: Financial Metrics Deep Dive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-red-600">₹673 cr</div>
                    <div className="text-sm text-red-700">Total Immediate Impact</div>
                    <div className="text-xs text-gray-600 mt-1">≈ $800M USD</div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <div className="text-center">
                    <TrendingDown className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-orange-600">22%</div>
                    <div className="text-sm text-orange-700">Initial Stock Drop</div>
                    <div className="text-xs text-gray-600 mt-1">Air India (Tata)</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-blue-600">3-4</div>
                    <div className="text-sm text-blue-700">Recovery Years</div>
                    <div className="text-xs text-gray-600 mt-1">Projected Timeline</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Air India Financial Impact Breakdown</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Direct Compensation</span>
                        <span className="font-bold text-red-600">₹390.5 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Passenger families (₹362 cr) + Ground victims (₹28.5 cr)
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Aircraft Hull Loss</span>
                        <span className="font-bold text-red-600">₹248 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Boeing 787-8 Dreamliner replacement cost
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Operational Disruption</span>
                        <span className="font-bold text-orange-600">₹45 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Route cancellations, fleet grounding, crew retraining
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Legal & Investigation</span>
                        <span className="font-bold text-yellow-600">₹25 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Investigation support, legal proceedings, regulatory compliance
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Boeing Financial Exposure</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Product Liability</span>
                        <span className="font-bold text-red-600">₹100-200 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Potential liability for fuel switch design flaw
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Fleet Modifications</span>
                        <span className="font-bold text-orange-600">₹300-500 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Global 787 fleet fuel switch system retrofits
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Lost Orders Impact</span>
                        <span className="font-bold text-yellow-600">₹1000+ cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Potential order cancellations and delayed deliveries
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Reputation Recovery</span>
                        <span className="font-bold text-blue-600">₹200-300 cr</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Marketing, customer support, safety initiatives
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance and Liability Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Insurance Coverage Structure</h3>
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-900">Hull Insurance</div>
                      <div className="text-sm text-green-700 mt-1">
                        Coverage: ₹250 crores<br/>
                        Carrier: Lloyd's of London syndicate<br/>
                        Deductible: ₹2 crores<br/>
                        Status: Claim filed, processing
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="font-semibold text-blue-900">Passenger Liability</div>
                      <div className="text-sm text-blue-700 mt-1">
                        Coverage: ₹500 crores per occurrence<br/>
                        Montreal Convention limits: $175,000 per passenger<br/>
                        Additional coverage: Unlimited above treaty limits<br/>
                        Expected payout: ₹400+ crores
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="font-semibold text-purple-900">Third Party Liability</div>
                      <div className="text-sm text-purple-700 mt-1">
                        Coverage: ₹100 crores<br/>
                        Ground damage: B.J. Medical College<br/>
                        Ground casualties: 19 fatalities + 67 injuries<br/>
                        Expected payout: ₹45-60 crores
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Financial Impact Timeline</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-red-500 pl-4">
                      <div className="font-semibold text-gray-900">Week 1-2 (Immediate)</div>
                      <div className="text-sm text-gray-700">
                        • Emergency response costs: ₹8 crores<br/>
                        • Initial compensation advances: ₹50 crores<br/>
                        • Stock market impact: ₹2,000+ crores market cap loss
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <div className="font-semibold text-gray-900">Month 1-3 (Short-term)</div>
                      <div className="text-sm text-gray-700">
                        • Insurance claim settlements: ₹600+ crores<br/>
                        • Operational adjustments: ₹30 crores<br/>
                        • Legal and investigation: ₹15 crores
                      </div>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <div className="font-semibold text-gray-900">Year 1 (Medium-term)</div>
                      <div className="text-sm text-gray-700">
                        • Revenue impact: ₹200-300 crores<br/>
                        • Safety investments: ₹100 crores<br/>
                        • Brand recovery costs: ₹75 crores
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-900">Year 2-3 (Recovery)</div>
                      <div className="text-sm text-gray-700">
                        • Gradual revenue recovery<br/>
                        • Continued safety investments<br/>
                        • Market confidence restoration
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <img 
                  src={imageResources.debrisMap} 
                  alt="Debris field diagram showing impact area" 
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-md"
                />
                <p className="text-xs text-gray-600 italic text-center mt-2">
                  Debris field analysis showing impact distribution across B.J. Medical College campus <CitationLink id="5" callType="quote" citations={citations}/>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Phase 6: Crisis Management Evaluation */}
      {activePhase === 5 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" />
                Phase 6: Crisis Management Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Air India Crisis Response Assessment</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-semibold text-green-900">Strengths</span>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Immediate ₹1 crore compensation announcement</li>
                        <li>• Rapid deployment of senior management to site</li>
                        <li>• Transparent communication with media</li>
                        <li>• Comprehensive victim family support</li>
                        <li>• Swift cooperation with investigation authorities</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-semibold text-yellow-900">Areas for Improvement</span>
                      </div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Delayed initial public statement (3 hours post-crash)</li>
                        <li>• Inconsistent messaging across different spokespeople</li>
                        <li>• Limited proactive customer confidence measures</li>
                        <li>• Insufficient social media crisis management</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="font-semibold text-blue-900 mb-2">Crisis Management Score</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm font-medium">7.5/10</span>
                      </div>
                      <div className="text-sm text-blue-700 mt-1">
                        Above-average response with room for communication improvements
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Boeing Crisis Response Assessment</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-semibold text-green-900">Strengths</span>
                      </div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Immediate technical team dispatch to India</li>
                        <li>• Full cooperation with AAIB investigation</li>
                        <li>• Proactive service bulletin issuance</li>
                        <li>• Global customer communication program</li>
                        <li>• Technical support for Air India fleet</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-semibold text-red-900">Challenges</span>
                      </div>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Prior knowledge of fuel switch issues (FAA SAIB)</li>
                        <li>• Slow initial public acknowledgment</li>
                        <li>• Limited customer confidence initiatives</li>
                        <li>• Defensive rather than proactive stance</li>
                        <li>• Insufficient media engagement strategy</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="font-semibold text-orange-900 mb-2">Crisis Management Score</div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-500 h-2 rounded-full" style={{width: '60%'}}></div>
                        </div>
                        <span className="text-sm font-medium">6.0/10</span>
                      </div>
                      <div className="text-sm text-orange-700 mt-1">
                        Adequate technical response, but communication gaps
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Crisis Communication Timeline</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold">13:39 IST - Crash Occurs</div>
                    <div className="text-sm text-gray-600">Boeing 787-8 impacts B.J. Medical College campus</div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="font-semibold">14:15 IST - Emergency Response</div>
                    <div className="text-sm text-gray-600">Fire services, medical teams mobilized</div>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="font-semibold">16:45 IST - First Official Statement</div>
                    <div className="text-sm text-gray-600">Air India confirms incident, casualty numbers</div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="font-semibold">18:30 IST - Tata Group Response</div>
                    <div className="text-sm text-gray-600">Chairman announces ₹1 crore compensation per family</div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold">June 13, 09:00 IST - Boeing Statement</div>
                    <div className="text-sm text-gray-600">Technical team dispatch, investigation support confirmed</div>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="font-semibold">June 14 - Government Response</div>
                    <div className="text-sm text-gray-600">PM Modi visits site, announces comprehensive investigation</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices vs. Actual Response Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-3">Crisis Management Element</th>
                      <th className="text-left p-3">Best Practice</th>
                      <th className="text-left p-3">Air India Response</th>
                      <th className="text-left p-3">Boeing Response</th>
                      <th className="text-left p-3">Gap Analysis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Initial Response Time</td>
                      <td className="p-3">Within 1 hour</td>
                      <td className="p-3">3 hours</td>
                      <td className="p-3">18 hours</td>
                      <td className="p-3"><span className="text-red-600">Delayed</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Message Consistency</td>
                      <td className="p-3">Single spokesperson</td>
                      <td className="p-3">Multiple sources</td>
                      <td className="p-3">Coordinated</td>
                      <td className="p-3"><span className="text-yellow-600">Mixed</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Victim Support</td>
                      <td className="p-3">Immediate assistance</td>
                      <td className="p-3">Excellent</td>
                      <td className="p-3">Limited</td>
                      <td className="p-3"><span className="text-green-600">Good</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-medium">Media Engagement</td>
                      <td className="p-3">Proactive transparency</td>
                      <td className="p-3">Reactive</td>
                      <td className="p-3">Defensive</td>
                      <td className="p-3"><span className="text-red-600">Poor</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Stakeholder Communication</td>
                      <td className="p-3">Multi-channel approach</td>
                      <td className="p-3">Good coverage</td>
                      <td className="p-3">Technical focus</td>
                      <td className="p-3"><span className="text-green-600">Adequate</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Phase 7: Strategic Recommendations */}
      {activePhase === 6 && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-purple-500" />
                Phase 7: Strategic Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Air India Strategic Recommendations</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="font-semibold text-blue-900 mb-2">Immediate Actions (0-6 months)</div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Implement comprehensive crisis communication protocol</li>
                        <li>• Establish dedicated victim family liaison team</li>
                        <li>• Launch customer confidence rebuilding campaign</li>
                        <li>• Enhance safety management system oversight</li>
                        <li>• Create emergency response fund (₹500 crores)</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-900 mb-2">Medium-term Strategy (6-18 months)</div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Invest in advanced pilot training simulators</li>
                        <li>• Diversify fleet to reduce single-type dependency</li>
                        <li>• Strengthen insurance coverage and risk management</li>
                        <li>• Develop strategic partnerships for safety sharing</li>
                        <li>• Implement predictive maintenance technologies</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="font-semibold text-purple-900 mb-2">Long-term Vision (18+ months)</div>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Position as India's safest airline through transparency</li>
                        <li>• Lead industry safety initiatives and standards</li>
                        <li>• Develop next-generation safety technologies</li>
                        <li>• Create aviation safety research center</li>
                        <li>• Build resilient crisis management capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Boeing Strategic Recommendations</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="font-semibold text-red-900 mb-2">Critical Actions (0-3 months)</div>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Mandatory fuel switch system retrofit for all 787s</li>
                        <li>• Issue comprehensive service bulletin</li>
                        <li>• Establish customer support hotline</li>
                        <li>• Launch global safety communication campaign</li>
                        <li>• Provide technical training to all 787 operators</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="font-semibold text-orange-900 mb-2">Design & Development (3-12 months)</div>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Redesign fuel control switch mechanism</li>
                        <li>• Implement additional safety interlocks</li>
                        <li>• Enhance cockpit warning systems</li>
                        <li>• Develop predictive failure detection</li>
                        <li>• Strengthen quality assurance processes</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <div className="font-semibold text-yellow-900 mb-2">Market Recovery (12+ months)</div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Rebuild 787 program credibility</li>
                        <li>• Strengthen customer relationships</li>
                        <li>• Invest in next-generation safety features</li>
                        <li>• Lead industry safety standards development</li>
                        <li>• Enhance crisis communication capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Industry-Wide Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <div className="font-semibold text-indigo-900 mb-2">Regulatory Enhancement</div>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• Mandatory design redundancy standards</li>
                      <li>• Enhanced certification processes</li>
                      <li>• Real-time safety data sharing</li>
                      <li>• International coordination protocols</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                    <div className="font-semibold text-teal-900 mb-2">Technology Innovation</div>
                    <ul className="text-sm text-teal-700 space-y-1">
                      <li>• AI-powered predictive maintenance</li>
                      <li>• Advanced flight data analytics</li>
                      <li>• Automated safety monitoring</li>
                      <li>• Digital twin simulations</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                    <div className="font-semibold text-pink-900 mb-2">Crisis Preparedness</div>
                    <ul className="text-sm text-pink-700 space-y-1">
                      <li>• Industry crisis response protocols</li>
                      <li>• Shared emergency resources</li>
                      <li>• Joint training programs</li>
                      <li>• Standardized communication</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Roadmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Priority Matrix</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-100 p-4 rounded-lg border-2 border-red-300">
                      <div className="font-semibold text-red-900 mb-2">High Priority / High Impact</div>
                      <ul className="text-sm text-red-700 space-y-1">
                        <li>• Fuel switch system retrofit</li>
                        <li>• Crisis communication protocol</li>
                        <li>• Victim family support</li>
                        <li>• Safety management enhancement</li>
                      </ul>
                    </div>

                    <div className="bg-orange-100 p-4 rounded-lg border-2 border-orange-300">
                      <div className="font-semibold text-orange-900 mb-2">High Priority / Medium Impact</div>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Customer confidence campaigns</li>
                        <li>• Fleet diversification planning</li>
                        <li>• Insurance coverage review</li>
                        <li>• Regulatory compliance upgrade</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg border-2 border-yellow-300">
                      <div className="font-semibold text-yellow-900 mb-2">Medium Priority / High Impact</div>
                      <ul className="text-sm text-yellow-700 space-y-1">
                        <li>• Technology innovation investments</li>
                        <li>• Industry partnership development</li>
                        <li>• Safety research initiatives</li>
                        <li>• Training program enhancement</li>
                      </ul>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg border-2 border-green-300">
                      <div className="font-semibold text-green-900 mb-2">Medium Priority / Medium Impact</div>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Brand repositioning strategies</li>
                        <li>• Long-term market expansion</li>
                        <li>• Sustainability initiatives</li>
                        <li>• Digital transformation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Success Metrics & KPIs</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-medium mb-3">Financial Recovery Indicators</div>
                      <ul className="text-sm space-y-1">
                        <li>• Stock price recovery to pre-incident levels</li>
                        <li>• Revenue growth return to positive trajectory</li>
                        <li>• Insurance claim settlement completion</li>
                        <li>• Operating margin restoration</li>
                        <li>• Market share stabilization</li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-medium mb-3">Safety & Operational Metrics</div>
                      <ul className="text-sm space-y-1">
                        <li>• Zero safety incidents target</li>
                        <li>• Customer satisfaction scores improvement</li>
                        <li>• On-time performance maintenance</li>
                        <li>• Fleet utilization optimization</li>
                        <li>• Regulatory compliance scores</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-gray-700" />
            Executive Summary & Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Critical Findings</h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <div className="font-semibold text-red-900">Financial Impact Scale</div>
                  <div className="text-sm text-red-700">
                    Total immediate impact of ₹673 crores represents the largest single aviation accident cost in Indian history, exceeding Air India Flight 182 adjusted for inflation.
                  </div>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg border border-orange-200">
                  <div className="font-semibold text-orange-900">First-of-Kind Incident</div>
                  <div className="text-sm text-orange-700">
                    As the first fatal Boeing 787 accident, this incident has global implications for the aircraft program and sets precedents for manufacturer liability.
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <div className="font-semibold text-blue-900">Recovery Timeline</div>
                  <div className="text-sm text-blue-700">
                    Based on historical analysis, full recovery is projected to take 3-4 years, with the most critical period being the first 18 months.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Strategic Implications</h3>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <div className="font-semibold text-green-900">Crisis Management Excellence</div>
                  <div className="text-sm text-green-700">
                    Air India's immediate compensation announcement and family support demonstrated industry-leading crisis response, though communication timing needs improvement.
                  </div>
                </div>

                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <div className="font-semibold text-purple-900">Technology Vulnerability</div>
                  <div className="text-sm text-purple-700">
                    The fuel switch failure highlights the need for enhanced redundancy in critical aircraft systems and better human-machine interface design.
                  </div>
                </div>

                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <div className="font-semibold text-yellow-900">Industry Transformation</div>
                  <div className="text-sm text-yellow-700">
                    This incident will likely accelerate adoption of predictive maintenance, AI-powered safety systems, and enhanced pilot training protocols industry-wide.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="font-semibold text-gray-900 mb-2">Final Assessment</div>
            <div className="text-sm text-gray-700">
              The Air India Flight 171 crash represents a watershed moment for both Air India and Boeing, with financial impacts extending far beyond immediate costs. While the human tragedy cannot be quantified, the incident provides crucial lessons for aviation safety, crisis management, and stakeholder communication. The comprehensive response from all parties, combined with the implementation of recommended strategies, will determine the long-term recovery trajectory and industry-wide safety improvements.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Citations Footer */}
      <Card className="w-full">
        <CardContent className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4 p-3 sm:p-6">
          <p className="font-semibold">References:</p>
          <ul className="space-y-1 mt-2">
            {Object.entries(citations).map(([id, citation]) => (
              <li key={id}>
                <CitationLink id={id} callType="recommend" citations={citations}/>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialImpactReport;

