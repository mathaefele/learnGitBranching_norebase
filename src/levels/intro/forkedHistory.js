exports.level = {
  "name": {
    "en_US": "Merge",
    "fr_FR": "Fusion"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C5\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C3\",\"id\":\"feature\",\"remoteTrackingBranchID\":null},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C1\"],\"id\":\"C4\"},\"C5\":{\"parents\":[\"C3\",\"C4\"],\"id\":\"C5\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout -b feature;git commit;git commit;git checkout main;git checkout -b bugFix;git commit ;git checkout main;git merge bugFix;git merge feature",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Just a hint"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Forked history",
              "",
              "You want to add a new feature to your software, but a bug fix has appeared in between.",
              "From a git perspective, main points at the latest version of your software and there are two branches that start from this revision and implement the new feature and the bug fix.",
              "Let su build this together !",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create a contribution on a branch `feature` with two commits",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## Feature implemented!",
              "",
              "",
              ""
            ],
            "command": "git branch feature; git checkout feature; git commit; git commit;",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Go back on the `main branch`, so back on revision c1",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## Back on the main branch !",
              "",
              "",
              ""
            ],
            "command": "git checkout main",
            "beforeCommand": "git branch feature; git checkout feature; git commit; git commit;"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create a contribution on a branch `bugFix` from this revision with one commit",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## Bug fix implemented !",
              " As a result, the history of the project has forked. We will see later how git will help us to merge all these revisions into the main branch of the software",
              "",
              "",
              ""
            ],
            "command": "git branch bugFix; git checkout bugFix; git commit; ",
            "beforeCommand": "git branch feature; git checkout feature; git commit; git commit; git checkout main;"
          }
        },
      ]
    }
  }
}
