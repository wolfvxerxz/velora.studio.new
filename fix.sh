#!/bin/bash
grep -v -A11 "Social Proof" components/hero-section.tsx > tmp.tsx && mv tmp.tsx components/hero-section.tsx
