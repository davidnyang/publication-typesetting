# Installation and first trial / 安装与首次试排

[English overview](../README.md) · [中文介绍](../README.zh-CN.md)

## Requirements

- An agent host that loads a directory containing `SKILL.md` and its references. Confirm its actual installation convention and permissions.
- Licensed layout software and fonts, plus an authorized control channel. These are not bundled.
- Python 3.9 or later for optional integrity and scaffolding tools; standard library only. Release checks run on Python 3.11. Reading the skill needs no Python.

Workflow instructions and detailed references currently use Simplified Chinese. See [validation](../VALIDATION.md) before relying on another language, host or application version.

## Manual installation

1. Download the versioned ZIP and `SHA256SUMS.txt` from the same release. Compare the ZIP's SHA-256 with your system's checksum tool, then extract it into a new directory. A matching published checksum detects a changed download; it is not independent proof of trust.
2. Review the skill, references and scripts before allowing execution.
3. Optionally run `python verify_bundle.py .` from the extracted package root. It checks listed bytes and unexpected files, without network or application access.
4. Copy the complete `skills/publication-typesetting` directory to your host's documented skills directory, retaining all subdirectories.
5. Reload skills as required by the host and confirm `publication-typesetting` appears. If discovery fails, inspect the host's instructions rather than granting broader permissions.

This path does not install a third-party CLI or submit installation telemetry. No cross-host installer is validated for this preview.

## Create a work directory

From the extracted root:

```text
python skills/publication-typesetting/scripts/new_commission.py --output <absolute-path-to-a-new-directory> --publication-id demo
```

Replace the angle-bracket placeholder with a real absolute path. The tool rejects an existing destination and a relative path. It writes blank records and a local receipt; it does not run a layout application. Keep outputs outside the release package.

Before a trial, supply publication requirements, authorized inputs and output locations. Start with synthetic or expressly authorized material. Confirm actual software, fonts, native save version and output purpose. Missing software control is a missing capability, not a completed action.

## Update or remove

Record the installed release, preserve project-specific configuration, inspect the new release and test a separate copy. Replace only the installed skill after accepting the change. To remove it, use the host's documented method or remove its installed skill directory after preserving customizations. Keep project documents outside the skill.

## 中文安装说明

1. 确认宿主支持 `SKILL.md` 目录，核对安装位置、刷新方式及权限；准备合法软件、字体和获准控制通道。
2. 从同一个 Release 下载 ZIP 与 `SHA256SUMS.txt`，核对 ZIP 哈希后解压到新目录。哈希一致核对下载内容，不是独立信任证明。
3. 先审阅文件；可在包根目录执行 `python verify_bundle.py .` 核对完整性。
4. 按宿主规定安装完整的 `skills/publication-typesetting` 目录，刷新并确认被发现。
5. 建档命令中尖括号须替换为新目录的实际绝对路径。工具只创建空白记录，不联网或调用应用，输出放在发布包外。
6. 先试排完整代表稿并验证保存重开和实际输出，再扩大委托。升级保留配置、审阅差异并用副本验证。

可选工具要求 Python 3.9 以上，本次检查使用 3.11。技能和详细参考目前为中文；英文说明不证明英文或其他文字系统已通过排版验收。本版未验证跨宿主安装器。
