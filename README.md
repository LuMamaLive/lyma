# LuMama Update Summary – Reset Button + Personalization Enhancements

### ✅ Changes Implemented:
1. Removed default tone selection (no tone pre-highlighted on load)
2. Added "Reset Quiz" button to hero section (only for returning users)
3. Reset button clears localStorage and reloads the page
4. Week/month inputs capped:
   - Pregnant: max 44 weeks
   - Postpartum: max 18 months
   - Mom of young child: max 60 months
5. If 0 months postpartum is selected, an optional week-level refinement (1–4) appears
6. LocalStorage expiration set to 7 days for tone, stage, and detail

### 🔐 Backup Included:
- See `/bak/lumama_pre_reset_button.zip` for your last working state before these updates.

### 📌 Notes:
- This zip is structured for clean replacement (excluding your `.git` folder if using version control)
