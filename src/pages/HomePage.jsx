import { useState } from 'react';
import { Layout, Button } from '../components';
import './HomePage.css';

function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleScanReceipt = () => {
    console.log('Scanner le ticket...');
    // TODO: Implémenter la logique de scan
  };

  return (
    <Layout>
      <div className="home-page">
        <div className="home-page__hero">
          <div className="home-page__icon">🛒</div>
          <h1 className="home-page__title">
            Bienvenue dans votre Frigo Anti-Gaspillage
          </h1>
          <p className="home-page__description">
            Prenez en photo votre ticket de caisse, nous nous occupons du reste !
            Plus jamais de produits oubliés au fond du frigo.
          </p>
        </div>

        <div className="home-page__actions">
          <Button
            onClick={handleScanReceipt}
            icon="📸"
            size="large"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? 'Analyse en cours...' : 'Scanner mon ticket'}
          </Button>
        </div>

        <div className="home-page__features">
          <h2 className="home-page__features-title">Comment ça marche ?</h2>

          <div className="feature-card">
            <div className="feature-card__icon">1️⃣</div>
            <div className="feature-card__content">
              <h3 className="feature-card__title">Scannez votre ticket</h3>
              <p className="feature-card__description">
                Prenez simplement une photo de votre ticket de courses
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">2️⃣</div>
            <div className="feature-card__content">
              <h3 className="feature-card__title">Analyse automatique</h3>
              <p className="feature-card__description">
                L'IA détecte tous vos produits alimentaires et leurs catégories
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">3️⃣</div>
            <div className="feature-card__content">
              <h3 className="feature-card__title">Questions rapides</h3>
              <p className="feature-card__description">
                2-3 questions pour préciser certains produits (frais, conserve, surgelé)
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">4️⃣</div>
            <div className="feature-card__content">
              <h3 className="feature-card__title">Dates automatiques</h3>
              <p className="feature-card__description">
                Attribution pessimiste des dates de péremption pour éviter tout gaspillage
              </p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-card__icon">🔔</div>
            <div className="feature-card__content">
              <h3 className="feature-card__title">Notifications</h3>
              <p className="feature-card__description">
                Recevez des alertes 2 jours avant que vos produits expirent
              </p>
            </div>
          </div>
        </div>

        <div className="home-page__stats">
          <div className="stat-card">
            <div className="stat-card__value">0</div>
            <div className="stat-card__label">Produits dans le frigo</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__value">0</div>
            <div className="stat-card__label">Produits sauvés du gaspillage</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
