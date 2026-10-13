# Publication Typesetting

**A publication layout workflow for AI agents — by CHYSON.**

English · [简体中文](README.zh-CN.md) · [Install](docs/INSTALL.md) · [Validation](VALIDATION.md) · [MIT](LICENSE)

![CHYSON Publication Typesetting: manuscript intake, trial layout, review and delivery](assets/social-preview.png)

Turn an editorial brief into a structured commission: inspect manuscripts, establish a publication profile, prepare a representative trial, operate authorized layout software, review revisions, and package the agreed deliverables.

**v0.1.0-preview.** Public documentation is available in English and Simplified Chinese. Workflow instructions and detailed references currently use Simplified Chinese. Chinese text flow is demonstrated in a two-page synthetic InDesign example. English typesetting, multilingual production and a second real publication have not been validated. [Exact scope](VALIDATION.md).

## Choose your path

| Your goal | Next step |
| --- | --- |
| Use the skill with your own agent and licensed software | [Install and prepare a trial](docs/INSTALL.md) |
| Inspect the example | [Two-page synthetic demonstration](examples/indesign/README.md) |
| Report an issue or share an experience | [Feedback guide](FEEDBACK.md) |
| Discuss paid trial layout, production, setup or training | [Contact CHYSON](https://chyson.cn/contact/) — Chinese contact page; English inquiries are welcome |

Start a service inquiry with the document language, approximate page count, image/table needs, intended output and deadline. Feasibility, scope, price and delivery date are confirmed individually. Arrange a private, authorized channel before sharing manuscripts; GitHub Issues are public.

## What is included

- A [reusable Agent Skill](skills/publication-typesetting/SKILL.md) for magazine, journal and periodical workflows.
- Blank publication, commission and editorial-review records, without preset client typography.
- Guidance for text flow, images, revision impact, review and delivery.
- A Python standard-library workspace initializer and a read-only integrity checker.
- Self-authored Chinese text, an InDesign JSX example and two preview images.

You need an agent host, licensed applications and fonts, and an authorized application-control channel. The skill does not install these components or provide desktop control. Software routes in the references are not a universal compatibility list.

## Quick start

1. Download the ZIP from the [preview release](https://github.com/davidnyang/publication-typesetting/releases/tag/v0.1.0-preview).
2. Review the files and [installation guide](docs/INSTALL.md). Install the complete skill directory using your host's supported method.
3. Confirm the host discovers `publication-typesetting`; check the actual software, fonts, permissions and new output directory.
4. Start with a complete synthetic or expressly authorized representative article. Review the trial before expanding the commission.

Example request:

> Use publication-typesetting to prepare a representative layout trial from my supplied article in a new, authorized work directory. Confirm the publication profile, available software and control channel. Preserve the original, verify text flow and overset text, save and reopen the native file, and inspect the exported PDF. Report missing evidence and unexecuted steps explicitly.

This example English request does not establish English-language typesetting acceptance.

## Inspect the demonstration

<p>
  <img src="examples/indesign/page-1.png" width="310" alt="Synthetic Chinese text flowing through two columns on page one">
  <img src="examples/indesign/page-2.png" width="310" alt="The same story continuing onto page two with deliberate blank space">
</p>

The blank space is deliberate: this example checks story continuation, reopening and PDF readback. It is a workflow demonstration, not a finished magazine design or client portfolio sample. [Reproduction details](examples/indesign/README.md).

| Component | Evidence in this preview |
| --- | --- |
| Native demonstration | InDesign 21.0.0.192 on one Windows host; two synthetic A4 pages |
| Text checks | 919 native story characters including separators; 910 normalized PDF body characters; all 10 paragraphs accounted for |
| Workflow and detailed references | Simplified Chinese |
| Public documentation | English and Simplified Chinese; translation is not multilingual layout validation |
| Other hosts, versions and operating systems | Not validated for this release |
| Real publication, press or customer acceptance | Not established by this synthetic example |

[VALIDATION.md](VALIDATION.md) records an initial extraction failure, its correction and remaining limits. Native INDD files, embedded-font PDFs, font files and application installers are not distributed.

## Feedback and maintenance

[Report an issue](https://github.com/davidnyang/publication-typesetting/issues/new/choose) using synthetic or public material. Include the release, environment, steps, expected and actual results. Do not attach client manuscripts, personal data, credentials, private paths or complete logs. Subjective ratings and technical acceptance are recorded separately.

Releases are versioned; see the [changelog](CHANGELOG.md). Review updates and test a work copy before changing a production installation. The package has no automatic updater or built-in telemetry. Included scripts do not make network requests; your agent host has its own data-processing and permission settings.

Original code, workflow documentation, blank templates and synthetic examples are distributed under the [MIT License](LICENSE). Third-party software and fonts retain their own licenses and are not included. No application-vendor endorsement is implied.

Maintained by **CHYSON / 智恩讯信**. [Contribute](CONTRIBUTING.md) · [Feedback](FEEDBACK.md) · [Professional services](https://chyson.cn/contact/)
