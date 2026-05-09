export function LaunchCommunicationShowcase({ variant }: { variant: string }) {
  if (variant === 'app-store') {
    return (
      <div className='launchShowcase'>
        <section className='launchPanel'>
          <p className='eyebrow'>Store presence</p>
          <h2>App Store & Google Play direction</h2>
          <div className='launchGrid'>
            <div className='storeCard'>
              <div className='storeFrame'>CT6 Dashboard</div>
              <strong>Your CT6 command dashboard</strong>
              <p>Dark UI, green active states, masked private data, and concise feature captions.</p>
            </div>
            <div className='storeCard'>
              <div className='storeFrame'>Fleet Insights</div>
              <strong>Review private fleet insights securely</strong>
              <p>Always show the product interface clearly instead of cinematic filler art.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (variant === 'social') {
    return (
      <div className='launchShowcase'>
        <section className='launchPanel'>
          <p className='eyebrow'>Social system</p>
          <h2>CT6 communication style</h2>
          <div className='launchGrid'>
            <div className='socialCard'>
              <strong>Feature announcement</strong>
              <p>New module: Fleet Insights. Members can now review synced ship and item data from a private dashboard.</p>
            </div>
            <div className='socialCard'>
              <strong>Visual rules</strong>
              <p>Dark backgrounds, UI-first imagery, minimal captions, and restrained green/gold accents.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className='launchShowcase'>
      <section className='launchPanel'>
        <p className='eyebrow'>Messaging</p>
        <h2>Email & notifications</h2>
        <div className='notificationList'>
          <div className='notificationItem'>
            <strong>Fleet sync complete.</strong>
            <div>12 records updated.</div>
          </div>
          <div className='notificationItem'>
            <strong>New CT6 mission available.</strong>
            <div>Review assignment details.</div>
          </div>
          <div className='notificationItem'>
            <strong>New sign-in detected.</strong>
            <div>Review account activity.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
