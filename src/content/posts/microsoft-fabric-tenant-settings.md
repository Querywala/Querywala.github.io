---
title: "Microsoft Fabric Tenant Settings: What You Should Review Before Opening Fabric to Everyone"
description: "Microsoft Fabric has many tenant-level settings that control how users, developers, service principals, and workloads can use the platform. Here are the settings worth reviewing before rolling Fabric out across your organization."
pubDatetime: 2026-09-08T07:00:00Z
featured: false
draft: false
tags:
  - Microsoft Fabric
  - Fabric Administration
  - Data Governance
  - Data Platform
  - Power BI
  - Data Security
---

![Microsoft Fabric Tenant Settings: What You Should Review Before Opening Fabric to Everyone](/assets/images/posts/Microsoft-Fabric-Tenant-Settings.png)

## Introduction

Microsoft Fabric gives organizations a lot of flexibility, but that flexibility also means there are many settings that should be reviewed before allowing everyone to use the platform.

The Fabric Admin Portal contains tenant-level settings that control feature availability, workspace creation, sharing, developer capabilities, APIs, networking, Git, Copilot, and other workloads.

You don't need to enable everything.

A better approach is to decide what should be available, who should have access, and what controls are required before enabling it.

This is a practical checklist of the tenant settings I would review before rolling Fabric out broadly.

## Where Are Fabric Tenant Settings?

In the Fabric portal:

**Settings → Admin portal → Tenant settings**

You need the appropriate Fabric administrator role to manage these settings.

Many tenant settings can be configured for the entire organization or limited to specific security groups. This makes security-group-based rollout useful for testing new capabilities before making them available more broadly.

---

## 1. Who Can Create Fabric Items?

One of the first settings to review is:

**Users can create Fabric items**

This controls whether users can create Fabric items such as Lakehouses, Warehouses, Notebooks, Data Pipelines, Dataflows Gen2, Semantic Models, and other Fabric artifacts within workspaces where they have sufficient permissions.

Before enabling this for the entire organization, consider whether you want every user to be able to create Fabric workloads or whether creation should initially be limited to specific teams.

For example:

- Data Engineering
- BI & Analytics
- Data Science
- Selected development teams

This can help you avoid uncontrolled creation of Fabric resources while your operating model is still being established.

---

## 2. Who Can Create Workspaces?

Workspace creation is controlled separately from Fabric item creation and should be reviewed as part of your overall tenant governance model.

Ask:

> Should every user be able to create a workspace?

For a large enterprise, the answer is often no.

A controlled approach could be:

**Business users → Request workspace**

**Data/BI team → Create and configure workspace**

This gives you more control over naming, ownership, capacity assignment, security, and lifecycle management.

---

## 3. Service Principals and Fabric APIs

If you are planning automation, CI/CD, or integration with Fabric APIs, review the developer settings carefully.

One important setting is:

**Service principals can call Fabric public APIs**

A common enterprise pattern is:

```text
Microsoft Entra App Registration
            ↓
      Service Principal
            ↓
      Security Group
            ↓
Fabric Tenant Setting
            ↓
 Workspace / Item Permissions
```

Don't confuse enabling the tenant setting with granting access to Fabric resources.

The tenant setting allows the service principal to use the APIs. You still need to grant the appropriate workspace and item permissions separately.

For example, you may want to enable this only for a dedicated security group containing your automation identities rather than opening it to the entire organization.

---

## 4. Admin APIs and Metadata Scanning

If your organization uses metadata scanning, governance automation, or catalog solutions, review:

**Service principals can access read-only admin APIs**

There are also settings that control whether Admin API responses include additional metadata such as DAX and mashup expressions.

These settings deserve particular attention because they can expose information about Power BI content through APIs.

The important question is not simply:

> "Do we need this?"

It is:

> "Who needs this access, and what information will the identity be able to retrieve?"

---

## 5. Export and Sharing

Review settings related to:

- Exporting data
- Sharing content
- Publishing content
- External data sharing

These settings are often overlooked because users see them as productivity features.

From a governance perspective, however, exporting data can be just as important as viewing the report.

For example:

```text
Report access
      ↓
User can query data
      ↓
User exports data
      ↓
Data leaves the governed report experience
```

Also remember that tenant settings are not a replacement for security permissions.

For example, the Export data setting controls availability of the feature in the user interface; it does not by itself restrict a user's underlying permissions to query a semantic model.

---

## 6. Git Integration

If your organization is using Git for Fabric development, review the Git-related tenant settings before rolling out development workflows.

Decide:

- Who can use Git integration?
- Which teams should have development workspaces?
- How will branches be managed?
- Who can connect workspaces to repositories?
- What is the promotion path from development to production?

Git should be part of your development operating model, not simply something that every workspace connects to independently.

---

## 7. Networking and Public Access

For organizations with stronger security requirements, review the networking settings.

Fabric networking capabilities continue to evolve and may vary by workload and feature area. Depending on your architecture and licensing, you may review capabilities such as:

- Private Link
- Public network access controls
- Managed private endpoints
- Firewall and network security configurations
- Workspace isolation features where supported

These settings can have significant architectural implications, so they should be reviewed with your security and network teams before enabling them.

This is not a setting I would change casually in a production environment.

---

## 8. Copilot and AI Settings

If you are introducing Fabric's AI capabilities, review the tenant settings related to:

**Copilot and Azure OpenAI Service**

Don't treat AI enablement as simply switching on a feature.

Consider:

- Which users should have access?
- What data can they access?
- Are the underlying semantic models governed?
- Are sensitive datasets appropriately secured?
- Does your organization have an AI usage policy?

AI features ultimately depend on the data and permissions underneath them.

Enabling Copilot doesn't replace data governance.

---

## 9. Additional Workloads

Fabric continues to add workloads and capabilities.

The tenant settings include controls for additional workloads and newer capabilities.

A simple rule is:

> **Don't enable a workload just because it exists.**

First understand:

- What problem does it solve?
- Who needs it?
- What data does it access?
- What permissions does it require?
- What are the operational implications?

For development of partner workloads, for example, Microsoft provides specific tenant controls for partner workload development.

---

## 10. Audit and Usage Settings

Don't overlook the audit and usage section.

Depending on your operating model, review settings related to:

- Usage metrics
- Per-user data in usage metrics
- Capacity Metrics visibility
- Azure Log Analytics connections
- Workspace monitoring

These settings can be useful for understanding adoption, usage, and platform operations.

For an enterprise Fabric environment, monitoring should not be an afterthought.

---

## 11. Don't Forget That Tenant Settings Change

This is probably one of the most important points.

Fabric is evolving quickly.

New tenant settings are added and existing settings can change.

Microsoft provides an indicator on the Tenant settings page when new settings or changes are introduced.

So tenant configuration should not be treated as a one-time activity.

A simple periodic review can be useful:

```text
New Fabric capabilities
        ↓
Review new tenant settings
        ↓
Security / Governance assessment
        ↓
Pilot with selected group
        ↓
Enable for wider organization
```

---

# A Simple Fabric Tenant Settings Checklist

Before opening Fabric to the wider organization, review at least:

| Area | Question |
|---|---|
| Fabric items | Who can create Fabric items? |
| Workspaces | Who can create workspaces? |
| Service principals | Do applications need Fabric API access? |
| Admin APIs | Who can access tenant metadata programmatically? |
| Sharing | Who can share content? |
| Export | Should users be allowed to export data? |
| Git | Who can connect workspaces to Git? |
| Networking | Do we require private or restricted network access? |
| AI | Who should have access to Copilot and AI capabilities? |
| Additional workloads | Which workloads should be available? |
| Monitoring | Who can access usage and monitoring information? |

---

# Final Thoughts

Microsoft Fabric gives administrators a lot of control, but the goal shouldn't be to turn every setting off.

The goal is to **make deliberate decisions about what is enabled, who can use it, and under what conditions**.

A good Fabric tenant configuration should balance:

**Security + Governance + Productivity + Flexibility**

And one final recommendation:

**Use security groups wherever the tenant setting supports them.**

Instead of:

> Enable → Everyone

consider:

> Enable → Pilot Group → Validate → Expand

That small change can make Fabric adoption much easier to manage as the platform grows.

Fabric tenant settings are not a one-time checklist. As new capabilities are introduced, they should become part of your regular platform governance review.
