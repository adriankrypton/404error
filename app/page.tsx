export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Domain-Hinweis
          </h1>
          
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Hallo lieber Domain-Inhaber,
            </p>
            
            <p>
              deine Domain zeigt derzeit auf die IP-Adresse eines Webservers, der bereits jemand anderem gehört. 
              Diese Nachricht dient als freundlicher Hinweis, damit du informiert bist und gegebenenfalls die 
              DNS-Einstellungen deiner Domain prüfen kannst.
            </p>
            
            <p>
              Diese Seite wurde erstellt, um sichtbar zu machen, was aktuell über deine Domain erreichbar ist – 
              damit du das im Blick hast.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 italic">
                Viele Grüße<br />
                Der Serveradmin<br />
                Discord: einfachadrian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}