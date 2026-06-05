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

      {/* সেকশন ৩: Series Content (নতুন যুক্ত করা হলো, বেগুনি থিম) */}
      <section className="series-content-section">
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

    </div>
  );
}