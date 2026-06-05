// @ts-nocheck
import { useEffect, useState } from 'react';

interface ArticleItem {
  title: string;
  link: string;
  type: string;
}

export default function Projects() {
  const [allData, setAllData] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/dob8ywe84feom')
      .then((res) => {
        if (!res.ok) throw new Error('ডেটা লোড করতে সমস্যা হয়েছে');
        return res.json();
      })
      .then((data) => {
        setAllData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // টাইপ অনুযায়ী ফিল্টার
  const biteSizeNews = allData.filter(
    (item) => item.type?.trim().toLowerCase() === 'bite-size'
  );
  const regularArticles = allData.filter(
    (item) => item.type?.trim().toLowerCase() === 'regular'
  );
  const seriesContent = allData.filter(
    (item) => item.type?.trim().toLowerCase() === 'series'
  );

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', fontSize: '20px', fontFamily: 'sans-serif', color: '#666' }}>
        ⏳ আপনার কন্টেন্টগুলো লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px', fontSize: '18px', fontFamily: 'sans-serif', color: '#ff4d4d' }}>
        ❌ ডেটা কানেকশনে সমস্যা হয়েছে। আপনার গুগল শিট ও API চেক করুন।
      </div>
    );
  }

  return (
    <div className="portfolio-sections-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* সেকশন ১: Bite-size News */}
      <section className="bite-size-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px', color: '#333', borderBottom: '3px solid #3b82f6', paddingBottom: '10px', display: 'inline-block' }}>
          📰 Bite-size News Articles ({biteSizeNews.length})
        </h2>
        
        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {biteSizeNews.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-card"
              style={{ 
                display: 'block', 
                padding: '20px', 
                borderRadius: '12px', 
                border: '1px solid #e5e7eb', 
                textDecoration: 'none', 
                color: '#1f2937',
                backgroundColor: '#f9fafb',
                boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
            >
              <p style={{ margin: 0, fontSize: '16px', fontWeight: '500', lineHeight: '1.5' }}>{item.title}</p>
            </a>
          ))}
          {biteSizeNews.length === 0 && <p style={{ color: '#9ca3af' }}>কোনো Bite-size নিউজ পাওয়া যায়নি।</p>}
        </div>
      </section>

      {/* সেকশন ২: Regular Articles */}
      <section className="regular-articles-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px', color: '#333', borderBottom: '3px solid #10b981', paddingBottom: '10px', display: 'inline-block' }}>
          ✍️ Regular Articles ({regularArticles.length})
        </h2>
        
        <div className="articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '25px' }}>
          {regularArticles.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="article-card"
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '25px', 
                borderRadius: '16px', 
                border: '1px solid #e5e7eb', 
                textDecoration: 'none', 
                color: '#111827',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
            >
              <h3 style={{ margin: '0 0 15px 0', fontSize: '20px', fontWeight: '600', lineHeight: '1.4' }}>{item.title}</h3>
              <span style={{ color: '#10b981', fontSize: '15px', fontWeight: '600', marginTop: 'auto', display: 'inline-flex', alignItems: 'center' }}>
                বিস্তারিত পড়ুন <span style={{ marginLeft: '5px' }}>↗</span>
              </span>
            </a>
          ))}
          {regularArticles.length === 0 && <p style={{ color: '#9ca3af' }}>কোনো রেগুলার আর্টিকেল পাওয়া যায়নি।</p>}
        </div>
      </section>

      {/* সেকশন ৩: Series Content */}
      <section className="series-content-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px', color: '#333', borderBottom: '3px solid #8b5cf6', paddingBottom: '10px', display: 'inline-block' }}>
          📚 Series Content ({seriesContent.length})
        </h2>
        
        <div className="series-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '25px' }}>
          {seriesContent.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="series-card"
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '25px', 
                borderRadius: '16px', 
                border: '1px solid #e5e7eb', 
                textDecoration: 'none', 
                color: '#111827',
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
            >
              <h3 style={{ margin: '0 0 15px 0', fontSize: '20px', fontWeight: '600', lineHeight: '1.4' }}>{item.title}</h3>
              <span style={{ color: '#8b5cf6', fontSize: '15px', fontWeight: '600', marginTop: 'auto', display: 'inline-flex', alignItems: 'center' }}>
                সিরিজটি পড়ুন <span style={{ marginLeft: '5px' }}>↗</span>
              </span>
            </a>
          ))}
          {seriesContent.length === 0 && <p style={{ color: '#9ca3af' }}>কোনো সিরিজ কন্টেন্ট পাওয়া যায়নি।</p>}
        </div>
      </section>

      {/* সেকশন ৪: Review Article Writing and Reports */}
      <section className="reviews-reports-section" style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px', color: '#333', borderBottom: '3px solid #f97316', paddingBottom: '10px', display: 'inline-block' }}>
          📊 Review Article Writing and Reports (2)
        </h2>
        
        <div className="reviews-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '25px' }}>
          <a 
            href="https://docs.google.com/document/d/1OvuwqZ3xYk8Q9TcrF8t3YYPXloXhYyIRGv6Zpmx2td4/edit?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="review-card"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e5e7eb', 
              textDecoration: 'none', 
              color: '#111827',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease'
            }}
          >
            <h3 style={{ margin: '0 0 15px 0', fontSize: '20px', fontWeight: '600', lineHeight: '1.4' }}>
              Review Article / Report - 1
            </h3>
            <span style={{ color: '#f97316', fontSize: '15px', fontWeight: '600', marginTop: 'auto', display: 'inline-flex', alignItems: 'center' }}>
              ডকুমেন্টটি দেখুন <span style={{ marginLeft: '5px' }}>↗</span>
            </span>
          </a>

          <a 
            href="https://docs.google.com/document/d/1_JCQi3JJ1waMvQ0ruzl56NWfBdXz8w9Hm_jEN39r5Mc/edit?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="review-card"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e5e7eb', 
              textDecoration: 'none', 
              color: '#111827',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease'
            }}
          >
            <h3 style={{ margin: '0 0 15px 0', fontSize: '20px', fontWeight: '600', lineHeight: '1.4' }}>
              Review Article / Report - 2
            </h3>
            <span style={{ color: '#f97316', fontSize: '15px', fontWeight: '600', marginTop: 'auto', display: 'inline-flex', alignItems: 'center' }}>
              ডকুমেন্টটি দেখুন <span style={{ marginLeft: '5px' }}>↗</span>
            </span>
          </a>
        </div>
      </section>

      {/* সেকশন ৫: Featured Projects (নতুন স্ট্যাটিক সেকশন, ইন্ডিগো থিম) */}
      <section className="featured-projects-section">
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '25px', color: '#333', borderBottom: '3px solid #6366f1', paddingBottom: '10px', display: 'inline-block' }}>
          🚀 Featured Projects (2)
        </h2>
        
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '25px' }}>
          
          {/* প্রজেক্ট ১ */}
          <div 
            className="project-card"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e5e7eb', 
              color: '#111827',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.04)'
            }}
          >
            <p style={{ margin: '0 0 20px 0', fontSize: '17px', fontWeight: '500', lineHeight: '1.6', color: '#1f2937' }}>
              Worked as an information and data formation analyst in the Dhaka Series (ep 3) by Science Bee.
            </p>
            <a 
              href="https://www.facebook.com/share/p/18otW2bQnY/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#6366f1', fontSize: '15px', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginTop: 'auto' }}
            >
              Facebook Post <span style={{ marginLeft: '5px' }}>↗</span>
            </a>
          </div>

          {/* প্রজেক্ট ২ (মাল্টিপল লিংক সহ) */}
          <div 
            className="project-card"
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '25px', 
              borderRadius: '16px', 
              border: '1px solid #e5e7eb', 
              color: '#111827',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 6px rgba(0,0,0,0.04)'
            }}
          >
            <p style={{ margin: '0 0 20px 0', fontSize: '17px', fontWeight: '500', lineHeight: '1.6', color: '#1f2937' }}>
              Worked as data coordinator in creating a website for the Textile Engineering admission help desk.
            </p>
            <div style={{ display: 'flex', gap: '20px', marginTop: 'auto', flexWrap: 'wrap' }}>
              <a 
                href="https://www.facebook.com/share/p/1EHJ2cTr15/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#6366f1', fontSize: '15px', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                Facebook Post <span style={{ marginLeft: '5px' }}>↗</span>
              </a>
              <a 
                href="https://textille-help-desk-by-habib-s-care.vercel.app/?fbclid=Iwb21leASNNohjbGNrBI02gWV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAABHgpY71UVQYoHOAgDw3sxLMtMLwHYLQNPaAhbN9yqAFpJ-05ICzXsOGHWqnuk_aem_iO0K37j1U5IWQKqL4W-DHgw" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#10b981', fontSize: '15px', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                Live Website <span style={{ marginLeft: '5px' }}>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}