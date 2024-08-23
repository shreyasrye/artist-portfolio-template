<script>
  let resumeViewUrl = './resume.pdf';
</script>

<div>
  <h1>Resume</h1>
  <iframe src={resumeViewUrl} width="100%" height="800px" title="Resume Viewer" class="resume-viewer"></iframe>
</div>

<style>
  .resume-viewer {
      width: 100%;
      height: 800px; /* Extended height */
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow around iframe */
  }
</style>