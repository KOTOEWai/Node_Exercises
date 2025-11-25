const EventEmitter = require("events");

class DownloadManager extends EventEmitter {
  download(file) {
    console.log(`Starting download: ${file}`);

    // 1) Start event
    this.emit("start", file);

    // Fake progress (real-world: network stream)
    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;

      // 2) Progress event
      this.emit("progress", progress);

      if (progress === 100) {
        clearInterval(interval);

        // 3) Completed event
        this.emit("complete", file);
      }
    }, 500);
  }
}

module.exports = DownloadManager;
