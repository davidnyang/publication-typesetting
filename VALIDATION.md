# Validation scope

[English overview](README.md) · [中文介绍](README.zh-CN.md)

## Demonstration evidence — 2026-10-13

A self-authored two-page Chinese document was exercised on one Windows host running InDesign 21.0.0.192. Four text frames were linked. Text flowed through both columns on page one and the first column on page two; the fourth frame remained empty. The native file was saved, closed and reopened, and an actual PDF was exported and read back.

The native story retained 919 characters including paragraph separators. The reopened story matched, with no overset text. Reading the PDF body in story-frame order and normalizing layout whitespace accounted for 910 characters and all 10 paragraphs. Actual font programs were embedded. Both A4 pages were visually inspected without observed missing text or clipping.

An initial whole-page extraction check did not match paragraph 7 continuously because a footer intervened at the page boundary. A subsequent check followed the native text-frame reading order and matched the complete body. This correction is preserved in the evidence; it does not establish pixel-identical reconstruction or acceptance of every font or punctuation rule.

The script restores the interaction and PDF settings it changes. No other documents were open at the start of that test, so protection of another user's unsaved document was not exercised. Other PDF preferences were inherited from that host. The demonstration is not an accepted print preset, ICC profile, bleed setup or press proof.

The workspace initializer was checked for a new destination, an existing destination and a relative path. Format and integrity checks concern packaging. Workflow response exercises do not replace application execution.

## What remains unvalidated

- Other layout applications, external image links, complex formulas or tables.
- English typesetting, multilingual layouts, bidirectional or complex scripts.
- Other agent hosts, application versions, recipient versions, Mac environments or printers' RIPs.
- Printed proofs, a second real publication or a whole-issue customer acceptance.

This public release changes packaging, public documentation and metadata. It does not repeat the native application test or expand the established capability. English documentation is not English layout acceptance. Deliberate blank space in the example supports flow inspection, not a finished-design quality claim.

---

# 本候选已验证的范围

2026-10-13，在一台Windows主机的InDesign 21.0.0.192完成自编两页稿：四个链接文字框，实际文字从第一栏续至第二栏，再续至第二页第一栏；第四框为空。保存INDD、关闭重开、导出PDF后回读。

原生正文919个字符含段落分隔，保存重开所有故事文字一致、无溢文。PDF正文按四框顺序提取并去除排版空白，910个字符全部对应，10段齐全；实际字体程序嵌入，PDF为两张A4页面。逐页查看未发现可见漏字或裁切。

首次对整页提取文本做段落搜索时，第7段因跨页间穿插页脚未连续匹配；保留失败记录并改为依据原生正文框的阅读顺序检查，全文一致。此检查验证文字，不证明像素级复原、所有字体或标点规则。

脚本恢复本次改动的交互和PDF设置。启动前没有其他打开的文档，因此没有验证“存在他人未保存文档”的恢复情形。PDF沿用此主机未改动的其他导出偏好，示例不是印前预设或ICC/出血验收。

建档工具另测新目录生成、拒绝已有目录和相对路径；技能格式与方法包完整性经过检查。工作流场景演练只验证回答行为，不能替代应用操作。

本轮未新测CorelDRAW、飞腾、照片/图链、公式表格、多语言、接收方旧版本、Mac系统、厂端RIP、印刷纸样或第二家杂志的整期交付。通用参考中的路线不等于所有平台已支持。示例留白用于观察跨页流程，不是成品杂志设计范本。
