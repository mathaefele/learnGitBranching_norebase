exports.level = {
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C5\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C3\",\"id\":\"feature\",\"remoteTrackingBranchID\":null},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git merge bugFix;git merge feature",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C3\",\"id\":\"feature\",\"remoteTrackingBranchID\":null},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Real merge",
    "fr_FR": "Véritable fusion"
  },
  "hint": {
    "en_US": "Just a hint !"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Real merge",
              "",
              "You want to add a new feature to your software, but a bug has appeared in between.",
              "",
              "From a git perspective, `main` points at the latest version of your software and there are two branches, `feature` and `bugFix`, that start from this revision and implement the new feature and the bug fix respectively.",
              "",
              "Let us merge these two contributions and improve our software !",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Merge the branch `bugFix`. This merge is a fast-forward as the history path of commits has not diverged between `main` and `bugFix`.",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## Bug fix integrated in the main branch of the software !",
              "",
              "",
              ""
            ],
            "command": "git merge bugFix",
            "beforeCommand": "git branch feature; git checkout feature; git commit; git commit; git checkout main;git branch bugFix; git checkout bugFix; git commit; git checkout main;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Merge branch `feature`. As we are already on branch `main`, we can directly merge `feature`.",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## New feature integrated in the software !",
              "",
              "This one is a real merge because the history path of commits has diverged between `main` and `feature`. Git creates a new revision that gathers modifications coming from  all commits until the common ancestor (revision c1).",
              "",
              "",
              ""
            ],
            "command": "git merge feature",
            "beforeCommand": "git branch feature; git checkout feature; git commit; git commit; git checkout main; git branch bugFix; git checkout bugFix; git commit; git checkout main; git merge bugFix"
          }
        }
      ]
    }
  }
}
