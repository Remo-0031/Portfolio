# Remo Del Rosario: Portfolio

A plain HTML + CSS personal site. There's no framework and no build step.

## Files

- `index.html`: all of the content
- `style.css`: all of the styling (colors and fonts are the variables at the top)
- `script.js`: a small script that highlights the current section in the nav and keeps the footer year current
- `Remo_Del_Rosario_Resume.pdf`: linked from the "Resume" buttons

## Editing

- **Content:** open `index.html` and find the section you want. Each one is marked with a comment like `<!-- ===== PROJECTS ===== -->`.
- **Add a job:** copy a `<li class="timeline-item">...</li>` block in Experience. Only the current job should keep `is-current`.
- **Add a project:** copy an `<article class="card">...</article>` block in Projects. Use `card card-featured` to make one span the full width.
- **Project repo links:** search for `TODO` in `index.html`. Each project currently points to your GitHub profile, so replace it with the exact repo URL.
- **Colors:** change the variables at the top of `style.css`. The dark-mode colors are right below them.
- **Resume:** replace the PDF and keep the same filename (or update the link in `index.html`).

To preview, just double-click `index.html` to open it in your browser.

## Deploying to GitHub Pages

1. On GitHub, create a **public** repository named exactly `Remo-0031.github.io`.
2. Push these files to it:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Remo-0031/Remo-0031.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages** and set the source to **Deploy from a branch**, with `main` and `/ (root)`.
4. After a minute or two, the site will be live at **https://remo-0031.github.io**.

To update the site later, edit the files, then commit and push again.
