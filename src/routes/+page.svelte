<script lang="ts">
	import TechLogos from '$lib/components/TechLogos.svelte';

	let openFaq = $state<string | null>(null);

	function toggleFaq(id: string) {
		openFaq = openFaq === id ? null : id;
	}

	const faqGroups = [
		{
			category: 'About Our Services',
			items: [
				{
					id: 'svc-1',
					q: 'What exactly does Myhren AI build?',
					a: 'We build custom AI systems and automations for businesses. This includes workflow automation that connects your tools and eliminates manual steps, AI agents that handle repetitive tasks 24/7, system integrations, and process consulting to find the bottlenecks costing you money.'
				},
				{
					id: 'svc-2',
					q: 'What tools do you work with?',
					a: "We're tool-agnostic. n8n, Make, custom APIs, OpenAI, Claude, Slack, HubSpot, Google Workspace, ERP systems. Whatever your stack needs. If it has an API, we can connect it."
				},
				{
					id: 'svc-3',
					q: 'Do I need to be technical?',
					a: "No. We handle everything. You tell us what's slowing you down, and we build the solution. You don't need to understand APIs, code, or AI models."
				}
			]
		},
		{
			category: 'Pricing & Ownership',
			items: [
				{
					id: 'price-1',
					q: 'How much does it cost?',
					a: 'It depends on complexity. Most projects start at a free strategy call where we scope the work and give you a fixed price. No surprises, no hourly billing that spirals out of control.'
				},
				{
					id: 'price-2',
					q: "What's the ROI compared to hiring?",
					a: "Most clients see 5-10x return within the first 3 months. An automation that saves 20 hours per week at $50/hr is saving you $4,000/month. Every month. Forever. And it doesn't call in sick."
				},
				{
					id: 'price-3',
					q: 'Do I own what you build?',
					a: 'Yes. 100%. No vendor lock-in. Every system, every workflow, every integration we build, you own it completely. If you want to part ways, you keep everything.'
				}
			]
		},
		{
			category: 'Implementation',
			items: [
				{
					id: 'impl-1',
					q: 'How long does it take?',
					a: 'Most automations are live within 1-2 weeks. Complex AI systems take 3-6 weeks. We give you a clear timeline before we start, and we stick to it.'
				},
				{
					id: 'impl-2',
					q: 'What do you need from us to get started?',
					a: "A 30-minute call to understand your workflows and pain points. That's it. We handle the rest: system access, building, testing, and deploying."
				},
				{
					id: 'impl-3',
					q: 'What if something breaks?',
					a: "We offer ongoing support and monitoring. If something breaks, we fix it. That's the deal. You don't need an in-house team to maintain what we build."
				}
			]
		}
	];
</script>

<section class="section-hero">
	<div class="container">
		<div class="hero-tag">
			<span class="hero-dot"></span>
			<span class="mono-label">AI & automation agency</span>
		</div>

		<h1 class="hero-h1">
			Your team is drowning in work that
			<span class="hero-accent">a machine should do.</span>
		</h1>

		<div class="hero-body">
			<div class="hero-desc">
				<p class="hero-p">
					We build AI systems and automations that eliminate manual busywork so your team stops wasting time on tasks that don't grow the business.
				</p>
			</div>

			<div class="hero-stat desktop-only">
				<div class="hero-stat-number">10x</div>
				<div class="hero-stat-label">faster than manual workflows</div>
			</div>

			<div class="hero-ctas desktop-only">
				<a href="#process" class="btn-outline">How it works &rarr;</a>
				<a href="https://cal.com" target="_blank" rel="noopener noreferrer" class="btn-primary">Book a call</a>
			</div>

			<div class="hero-ctas-mobile mobile-only">
				<a href="https://cal.com" target="_blank" rel="noopener noreferrer" class="btn-primary hero-btn-mobile">Book a call</a>
				<a href="#process" class="btn-outline hero-btn-mobile">How it works &rarr;</a>
			</div>
		</div>
	</div>
</section>

<TechLogos />

<section id="services" class="section">
	<div class="container">
		<div class="section-header">
			<div class="sh-label">
				<div class="mono-label">&sect; 01 &mdash; What we build</div>
			</div>
			<h2 class="sh-title">One system for every task your team shouldn't be doing manually.</h2>
		</div>

		<div class="services-grid">
			<div class="service-cell">
				<div class="service-card">
					<div class="service-num">01</div>
					<div class="service-content">
						<h3 class="service-title">Workflow Automation</h3>
						<p class="service-desc">We connect your tools and eliminate the manual steps between them. What took your team 4 hours now happens in 4 seconds. Automatically.</p>
					</div>
				</div>
			</div>

			<div class="service-cell">
				<div class="service-card">
					<div class="service-num">02</div>
					<div class="service-content">
						<h3 class="service-title">AI Agents</h3>
						<p class="service-desc">Custom AI that handles customer inquiries, qualifies leads, processes documents, and routes tasks. 24/7, without breaks or bad days.</p>
					</div>
				</div>
			</div>

			<div class="service-cell">
				<div class="service-card">
					<div class="service-num">03</div>
					<div class="service-content">
						<h3 class="service-title">System Integration</h3>
						<p class="service-desc">Your CRM doesn't talk to your invoicing tool. Your project management tool doesn't update your client portal. We make everything talk to everything.</p>
					</div>
				</div>
			</div>

			<div class="service-cell">
				<div class="service-card">
					<div class="service-num">04</div>
					<div class="service-content">
						<h3 class="service-title">Process Consulting</h3>
						<p class="service-desc">Before we build anything, we find the bottleneck hiding in your operations. The one costing you thousands every month. Then we eliminate it.</p>
					</div>
				</div>
			</div>
		</div>

		<div class="stats-grid stats-mt">
			<div class="stat-cell">
				<div class="stat-number">24/7</div>
				<div class="stat-label">Always running</div>
			</div>
			<div class="stat-cell">
				<div class="stat-number">&lt; 2 wk</div>
				<div class="stat-label">Average delivery</div>
			</div>
			<div class="stat-cell">
				<div class="stat-number">10x</div>
				<div class="stat-label">Efficiency gain</div>
			</div>
			<div class="stat-cell stat-cell-last">
				<div class="stat-number">0</div>
				<div class="stat-label">Vendor lock-in</div>
			</div>
		</div>
	</div>
</section>

<section id="process" class="section-dark">
	<div class="container">
		<div class="section-header section-header-dark">
			<div class="sh-label">
				<div class="mono-label">&sect; 02 &mdash; How we work</div>
			</div>
			<h2 class="sh-title sh-title-white">We don't sell software. We eliminate the work you hate.</h2>
		</div>

		<div class="process-grid">
			<div class="process-cell">
				<div class="process-card">
					<div class="process-num">01</div>
					<h3 class="process-title">Audit</h3>
					<p class="process-desc">We map your workflows, find the bottlenecks, and calculate exactly how much they're costing you. Free. No obligation. If we can't help, we'll tell you.</p>
				</div>
			</div>

			<div class="process-cell">
				<div class="process-card">
					<div class="process-num">02</div>
					<h3 class="process-title">Build</h3>
					<p class="process-desc">Custom automations and AI systems tailored to your exact process. No templates. No generic solutions. Built specifically for the way your business operates.</p>
				</div>
			</div>

			<div class="process-cell">
				<div class="process-card">
					<div class="process-num">03</div>
					<h3 class="process-title">Deploy & Optimize</h3>
					<p class="process-desc">We launch, monitor, and improve your systems over time. When something breaks at 2 AM, we fix it, not you. Ongoing support included.</p>
				</div>
			</div>
		</div>

		<div class="process-cta-bar">
			<div class="process-cta-text">
				<p class="process-cta-title">Ready to find the bottleneck hiding in your operations?</p>
				<p class="process-cta-sub">No obligation &middot; 30-minute strategy call</p>
			</div>
			<a href="https://cal.com" target="_blank" rel="noopener noreferrer" class="btn-white">Book a free consultation</a>
		</div>
	</div>
</section>

<section id="faq" class="section">
	<div class="container">
		<div class="faq-grid">
			<div class="faq-sidebar">
				<div class="mono-label">&sect; 03 &mdash; FAQ</div>
				<h2 class="faq-title">Questions we get asked.</h2>
				<p class="faq-sub">Still have questions? <a href="#contact" class="faq-link">Send us a message</a></p>
			</div>

			<div class="faq-content">
				{#each faqGroups as group}
					<div class="faq-group">
						<div class="faq-category">{group.category}</div>
						{#each group.items as item}
							<div class="faq-item" class:faq-item-open={openFaq === item.id}>
								<button
									class="faq-question"
									onclick={() => toggleFaq(item.id)}
									aria-expanded={openFaq === item.id}
								>
									<span>{item.q}</span>
									<span class="faq-toggle">{openFaq === item.id ? '\u2212' : '+'}</span>
								</button>
								{#if openFaq === item.id}
									<div class="faq-answer">
										<p>{item.a}</p>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="section-cta">
	<div class="container">
		<h2 class="cta-h2">
			Stop losing money to manual work.<br />
			<span class="cta-italic">Start automating it.</span>
		</h2>
		<div class="cta-buttons">
			<a href="https://cal.com" target="_blank" rel="noopener noreferrer" class="btn-dark cta-btn">Book a 30-minute call</a>
			<a href="mailto:contact@myhren.ai" class="btn-ghost cta-btn">contact@myhren.ai</a>
		</div>
	</div>
</section>

<section id="contact" class="section">
	<div class="container">
		<div class="contact-grid">
			<div class="contact-sidebar">
				<div class="mono-label">&sect; 04 &mdash; Get in touch</div>
				<h2 class="contact-title">Let's talk about your business.</h2>
				<p class="contact-sub">Send us a message or book a call directly. We typically respond within a few hours.</p>
				<div class="contact-links">
					<a href="mailto:contact@myhren.ai" class="contact-email">contact@myhren.ai</a>
					<a href="https://cal.com" target="_blank" rel="noopener noreferrer" class="contact-book">Book a call &rarr;</a>
				</div>
			</div>

			<div class="contact-form-wrap">
				<form class="contact-form" action="mailto:contact@myhren.ai" method="post" enctype="text/plain">
					<div class="name-grid">
						<div class="form-field">
							<label for="first-name" class="form-label">First name *</label>
							<input id="first-name" name="first-name" required placeholder="Jane" class="form-input" />
						</div>
						<div class="form-field">
							<label for="last-name" class="form-label">Last name *</label>
							<input id="last-name" name="last-name" required placeholder="Smith" class="form-input" />
						</div>
					</div>

					<div class="form-field">
						<label for="email" class="form-label">Email *</label>
						<input id="email" name="email" type="email" required placeholder="jane@company.com" class="form-input" />
					</div>

					<div class="form-field">
						<label for="company" class="form-label">Company *</label>
						<input id="company" name="company" required placeholder="Your Company Name" class="form-input" />
					</div>

					<div class="form-field">
						<label for="message" class="form-label">Message</label>
						<textarea id="message" name="message" placeholder="Tell us what's slowing your team down..." class="form-input form-textarea"></textarea>
					</div>

					<div class="form-actions">
						<button type="submit" class="btn-dark">Send message</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-tag {
		display: flex;
		align-items: flex-start;
		gap: 10px;
		font-size: 12px;
		color: #555;
		letter-spacing: 0.5px;
		margin-bottom: clamp(40px, 8vw, 80px);
		text-transform: uppercase;
	}

	.hero-dot {
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background: var(--c-accent);
		flex-shrink: 0;
		margin-top: 3px;
	}

	.hero-h1 {
		font-size: clamp(48px, 7vw, 100px);
		line-height: 0.96;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.035em;
		margin: 0;
		max-width: 1100px;
		color: var(--c-text);
	}

	.hero-accent {
		color: var(--c-accent);
		font-style: italic;
		font-weight: 400;
	}

	.hero-p {
		font-size: 19px;
		line-height: 1.5;
		color: var(--c-text-secondary);
		margin: 0;
		max-width: 460px;
		font-weight: 400;
	}

	.hero-stat-number {
		font-size: 44px;
		font-weight: 500;
		letter-spacing: -0.02em;
		line-height: 1;
		font-family: var(--f-heading);
		color: var(--c-accent);
	}

	.hero-stat-label {
		font-size: 13px;
		color: var(--c-text-secondary);
		margin-top: 4px;
	}

	.hero-ctas-mobile {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-top: 8px;
	}

	.hero-btn-mobile {
		text-align: center;
		font-size: 15px;
		padding: 14px 22px;
	}

	.sh-label {
		display: flex;
		align-items: center;
	}

	.sh-title {
		font-size: clamp(28px, 4vw, 44px);
		line-height: 1.05;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.02em;
		margin: 0;
		color: var(--c-text);
	}

	.sh-title-white {
		color: var(--c-white);
	}

	.service-card {
		padding: 32px 24px 40px;
		border-bottom: 1px solid var(--c-border);
		min-height: 260px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.service-num {
		font-family: var(--f-mono);
		font-size: 11px;
		color: var(--c-accent);
		letter-spacing: 0.5px;
	}

	.service-title {
		font-size: 22px;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.01em;
		margin: 0 0 10px;
		color: var(--c-text);
	}

	.service-desc {
		font-size: 14px;
		line-height: 1.55;
		color: var(--c-text-secondary);
		margin: 0;
	}

	.stats-mt {
		margin-top: 48px;
	}

	.stat-cell {
		padding: 28px 24px;
	}

	.stat-cell-last {
		border-right: none;
	}

	.stat-number {
		font-size: 36px;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.02em;
		color: var(--c-accent);
		line-height: 1;
	}

	.stat-label {
		font-family: var(--f-mono);
		font-size: 11px;
		color: var(--c-text-muted);
		margin-top: 8px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.section-header-dark :global(.mono-label) {
		color: var(--c-text-muted);
	}

	.process-card {
		padding: 32px 24px 48px;
	}

	.process-num {
		font-family: var(--f-mono);
		font-size: 11px;
		color: var(--c-accent);
		letter-spacing: 0.5px;
		margin-bottom: 40px;
	}

	.process-title {
		font-size: 26px;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.01em;
		margin: 0 0 14px;
		color: var(--c-white);
	}

	.process-desc {
		font-size: 14px;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.6);
		margin: 0;
	}

	.process-cta-bar {
		margin-top: clamp(40px, 6vw, 72px);
		padding: clamp(20px, 4vw, 32px) clamp(20px, 4vw, 40px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
	}

	.process-cta-title {
		font-size: 18px;
		font-weight: 500;
		color: var(--c-white);
		margin: 0 0 6px;
		font-family: var(--f-heading);
	}

	.process-cta-sub {
		font-family: var(--f-mono);
		font-size: 11px;
		color: rgba(255, 255, 255, 0.45);
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.btn-white {
		padding: 14px 24px;
		background: var(--c-white);
		color: var(--c-dark);
		border-radius: 999px;
		font-size: 14px;
		font-weight: 600;
		text-decoration: none;
		white-space: nowrap;
	}

	.faq-sidebar {
		grid-column: span 4;
	}

	.faq-title {
		font-size: clamp(28px, 3vw, 40px);
		line-height: 1.05;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.02em;
		margin: 16px 0 0;
		color: var(--c-text);
	}

	.faq-sub {
		font-size: 14px;
		color: var(--c-text-muted);
		margin-top: 16px;
		line-height: 1.6;
	}

	.faq-link {
		color: var(--c-accent);
		text-decoration: none;
	}

	.faq-content {
		grid-column: span 8;
		border-top: 1px solid var(--c-border);
	}

	.faq-category {
		font-family: var(--f-mono);
		font-size: 10px;
		color: var(--c-text-faint);
		text-transform: uppercase;
		letter-spacing: 0.6px;
		padding: 20px 0 12px;
		border-bottom: 1px solid #f0f0f0;
	}

	.faq-item {
		border-bottom: 1px solid var(--c-border);
	}

	.faq-question {
		width: 100%;
		text-align: left;
		padding: 18px 0;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: var(--f-heading);
		font-size: 17px;
		font-weight: 500;
		color: var(--c-text);
		letter-spacing: -0.01em;
		gap: 16px;
	}

	.faq-toggle {
		color: var(--c-accent);
		font-size: 20px;
		flex-shrink: 0;
		transition: transform 200ms;
	}

	.faq-answer {
		padding: 0 0 18px;
	}

	.faq-answer p {
		font-size: 15px;
		line-height: 1.6;
		color: var(--c-text-secondary);
		margin: 0;
	}

	.cta-h2 {
		font-size: clamp(44px, 7vw, 90px);
		line-height: 0.96;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.03em;
		margin: 0;
		max-width: 960px;
		color: var(--c-white);
	}

	.cta-italic {
		font-style: italic;
		font-weight: 400;
		color: rgba(255, 255, 255, 0.65);
	}

	.cta-buttons {
		margin-top: 56px;
		display: flex;
		gap: 16px;
		align-items: center;
		flex-wrap: wrap;
	}

	.cta-btn {
		padding: 16px 28px;
		font-size: 15px;
	}

	.contact-sidebar {
		grid-column: span 4;
	}

	.contact-title {
		font-size: clamp(28px, 3vw, 40px);
		line-height: 1.05;
		font-weight: 500;
		font-family: var(--f-heading);
		letter-spacing: -0.02em;
		margin: 16px 0 0;
		color: var(--c-text);
	}

	.contact-sub {
		font-size: 15px;
		color: var(--c-text-secondary);
		margin-top: 16px;
		line-height: 1.6;
	}

	.contact-links {
		margin-top: 32px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.contact-email {
		font-family: var(--f-mono);
		font-size: 12px;
		color: var(--c-accent);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.contact-book {
		font-family: var(--f-mono);
		font-size: 12px;
		color: var(--c-text-muted);
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.contact-form-wrap {
		grid-column: span 8;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.form-field {
		display: flex;
		flex-direction: column;
	}

	.form-label {
		font-family: var(--f-mono);
		font-size: 10px;
		color: var(--c-text-faint);
		text-transform: uppercase;
		letter-spacing: 0.6px;
		display: block;
		margin-bottom: 8px;
	}

	.form-input {
		width: 100%;
		padding: 12px 16px;
		border: 1px solid #e0e0e0;
		border-radius: 4px;
		font-size: 15px;
		font-family: var(--f-body);
		background: var(--c-white);
		color: var(--c-text);
		outline: none;
		box-sizing: border-box;
		transition: border-color 0.2s;
	}

	.form-input:focus {
		border-color: var(--c-accent);
	}

	.form-textarea {
		resize: vertical;
		min-height: 100px;
	}

	.form-actions {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	@media (max-width: 900px) {
		.faq-sidebar {
			grid-column: 1;
		}

		.faq-content {
			grid-column: 1;
		}

		.contact-sidebar {
			grid-column: 1;
		}

		.contact-form-wrap {
			grid-column: 1;
		}

		.hero-ctas {
			display: none;
		}
	}

	@media (min-width: 901px) {
		.mobile-only {
			display: none !important;
		}
	}
</style>
