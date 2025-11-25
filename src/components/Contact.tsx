import { Users } from 'lucide-react';
import Abigail from './conferencephotos/Abigail-Photo (1).png';
import nejad from './conferencephotos/nejad (1).jpg';
import ammar from './conferencephotos/amaar (1).jpeg';
import chris from './conferencephotos/chris (1).png';
import amin from './conferencephotos/amin.jpeg';
import Wathiq from './conferencephotos/Wathiq-Mansoor (1).jpg';
import aya from './conferencephotos/aya (1).jpg';
import valsa from './conferencephotos/valsa.jpg';
import yassine from './conferencephotos/Yassine.jpg';
export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Abigail Copiaco',
      role: 'Principal Investigator',
      affiliation: 'University of Dubai',
      photo: Abigail,
    },
    {
      name: 'Dr. Yassine Himeur',
      role: 'Co-Principal Investigator',
      affiliation: 'University of Dubai',
      photo: yassine,
    },
    {
      name: 'Prof. Wathiq Mansoor',
      role: 'Co-Principal Investigator',
      affiliation: 'University of Dubai',
      photo: Wathiq,
    },
    {
      name: 'Dr. Ammar Albanna',
      role: 'Co-Principal Investigator',
      affiliation: 'Al Amal Psychiatric Hospital',
      photo: ammar,
    },
    {
      name: 'Nejad Alagha',
      role: 'Research Assistant',
      affiliation: 'University of Dubai',
      photo: nejad,
    },
    {
      name: 'Aya Elkhodiry',
      role: 'Research Assistant',
      affiliation: 'University of Dubai',
      photo: aya,
    },
    {
      name: 'Prof. Valsamma Eapen',
      role: 'External Advisor',
      affiliation: 'University of New South Wales',
      photo: valsa,
    },
    {
      name: 'Prof. Christian Ritz',
      role: 'External Advisor',
      affiliation: 'University of Wollongong',
      photo: chris,
    },
    {
      name: 'Prof. Amin Beheshti',
      role: 'External Advisor',
      affiliation: 'Macquarie University',
      photo:amin,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind BrightPath, working together to create innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-all duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3 text-lg">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.affiliation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}