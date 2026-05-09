import {
  communicationExamples,
  emailStructure,
  launchChannels,
  notificationRules,
  socialTemplates,
  storeScreenshots,
} from '@/data/launchCommunicationExamples';

function AppStoreShowcase() {
  return (
    <div className="launchShowcase">
      <section className="launchHeroPanel">
        <div>
          <p className="eyebrow">Storefront system</p>
          <h2>Show the product. Prove the value. Protect private data.</h2>
          <p>
            App Store and Google Play assets must make CT6 Companion feel like a private command interface,
            not a generic sci-fi fan app. Every screenshot should communicate a feature, a benefit, and a clean UI hierarchy.
          </p>
        </div>
        <div className="storeDeviceCluster" aria-label="Store screenshot preview cluster">
          <div className="storeDevice primaryDevice">
            <span>Dashboard</span>
            <strong>CT6 Command</strong>
            <em>Ready / Synced / Private</em>
          </div>
          <div className="storeDevice secondaryDevice">
            <span>Fleet</span>
            <strong>Private Insights</strong>
            <em>Masked Data</em>
          </div>
        </div>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Screenshot sequence</p>
        <h2>Recommended store screenshot set</h2>
        <div className="storeScreenshotGrid">
          {storeScreenshots.map((shot, index) => (
            <article className="storeScreenshotCard" key={shot.title}>
              <div className="screenshotNumber">{String(index + 1).padStart(2, '0')}</div>
              <div className="phoneFrame">
                <span>{shot.caption}</span>
              </div>
              <h3>{shot.title}</h3>
              <p><strong>Focus:</strong> {shot.focus}</p>
              <p><strong>Avoid:</strong> {shot.avoid}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Store copy</p>
        <h2>Description pattern</h2>
        <div className="copyExampleBlock">
          <span>Recommended short description</span>
          <p>
            CT6 Companion gives CT6 members a private command interface for missions, blueprints,
            ship data, fleet details, item tracking, and account insights.
          </p>
        </div>
        <div className="copyExampleBlock">
          <span>Screenshot caption rules</span>
          <p>Use short, benefit-first captions: â€œYour CT6 command dashboardâ€, â€œAccess blueprint data fasterâ€, â€œPrepare for CT6 operationsâ€.</p>
        </div>
      </section>
    </div>
  );
}

function SocialShowcase() {
  return (
    <div className="launchShowcase">
      <section className="launchHeroPanel">
        <div>
          <p className="eyebrow">Social and Discord</p>
          <h2>Launch communication should feel controlled, useful, and CT6-owned.</h2>
          <p>
            Social and Discord posts should focus on product clarity, release progress, and member value.
            The tone is direct and professional, not meme-heavy or exaggerated.
          </p>
        </div>
        <div className="socialMockCard">
          <span>CT6 Companion Update</span>
          <strong>New module: Fleet Insights</strong>
          <p>Review synced ship and item data from a private dashboard built for faster planning.</p>
          <em>Open dashboard â†’</em>
        </div>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Templates</p>
        <h2>Reusable post formats</h2>
        <div className="socialTemplateGrid">
          {socialTemplates.map((template) => (
            <article className="socialTemplateCard" key={template.type}>
              <h3>{template.type}</h3>
              <dl>
                <div><dt>Layout</dt><dd>{template.layout}</dd></div>
                <div><dt>Copy</dt><dd>{template.copy}</dd></div>
                <div><dt>Visual</dt><dd>{template.visual}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Channel rules</p>
        <h2>Where each message belongs</h2>
        <div className="launchChannelGrid">
          {launchChannels.filter((channel) => channel.id === 'discord' || channel.id === 'social').map((channel) => (
            <article className="channelCard" key={channel.id}>
              <h3>{channel.title}</h3>
              <p>{channel.purpose}</p>
              <ul>{channel.rules.map((rule) => <li key={rule}>{rule}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function EmailNotificationsShowcase() {
  return (
    <div className="launchShowcase">
      <section className="launchHeroPanel">
        <div>
          <p className="eyebrow">Email and notifications</p>
          <h2>Messages should be useful, calm, and privacy-safe.</h2>
          <p>
            Every outbound message should say what happened, why it matters, and what the member can do next.
            Sensitive data must never appear in public previews.
          </p>
        </div>
        <div className="notificationStack">
          <div className="notificationExample success"><strong>Fleet sync complete.</strong><span>12 records updated.</span></div>
          <div className="notificationExample info"><strong>New CT6 mission available.</strong><span>Review assignment details.</span></div>
          <div className="notificationExample warning"><strong>New sign-in detected.</strong><span>Review account activity.</span></div>
        </div>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Email structure</p>
        <h2>Standard email layout</h2>
        <div className="emailStructureGrid">
          {emailStructure.map((item) => (
            <article className="emailStepCard" key={item.section}>
              <h3>{item.section}</h3>
              <p>{item.rule}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Notification rules</p>
        <h2>Push message control</h2>
        <ul className="launchRuleList">
          {notificationRules.map((rule) => <li key={rule}>{rule}</li>)}
        </ul>
      </section>

      <section className="launchPanel">
        <p className="eyebrow">Good vs bad</p>
        <h2>Communication examples</h2>
        <div className="messageExampleGrid">
          {communicationExamples.map((example) => (
            <article className="messageExampleCard" key={example.situation}>
              <h3>{example.situation}</h3>
              <div className="badCopy"><span>Bad</span><p>{example.bad}</p></div>
              <div className="goodCopy"><span>Good</span><p>{example.good}</p></div>
              <p className="whyCopy">{example.why}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function LaunchCommunicationShowcase({ variant }: { variant: string }) {
  if (variant === 'app-store') return <AppStoreShowcase />;
  if (variant === 'social') return <SocialShowcase />;
  return <EmailNotificationsShowcase />;
}
