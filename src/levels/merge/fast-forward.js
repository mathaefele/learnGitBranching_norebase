exports.level = {
  "name": {
    "en_US": "Fast-forward merge",
    "fr_FR": "Fusion triviale"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C3\",\"id\":\"main\",\"remoteTrackingBranchID\":null},\"feature\":{\"target\":\"C3\",\"id\":\"feature\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C2\"],\"id\":\"C3\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git branch feature;git checkout feature;git commit ;git commit ;git checkout main;git merge feature",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
    "en_US": "Just a hint !!"
  },
  "name": {
    "en_US": "Fast forward merge"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Fast-forward merge",
              "",
              "A new feature has been added in your software on a branch.",
              "* Create and switch to a branch `feature` to build this contribution",
              "* Create two commits on this branch",
              "* Switch back to the `main` branch",
              "* Merge this new feature into the `main` branch",
              "",
              ""
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Create and switch to a branch `feature` to build this contribution",
              ""
            ],
            "afterMarkdowns": [
              "## Ready to implement the new feature !",
              "",
              ""
            ],
            "command": "git branch feature; git checkout feature",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Feature implemented in two commits",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## Feature implemented on branch `feature` !!",
              "",
              "",
              ""
            ],
            "command": "git commit; git commit",
            "beforeCommand": "git branch feature; git checkout feature"
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Merge the feature in the `main` branch.",
              "",
              "",
              ""
            ],
            "afterMarkdowns": [
              "## You have performed a `fast-forward` merge !!",
              "",
              "Only labels have moved in this merge operation, nothing had to be really \"merged\" as the `main` branch did not progress in the mean time.",
              ""
            ],
            "command": "git checkout main; git merge feature",
            "beforeCommand": "git branch feature; git checkout feature; git commit; git commit;"
          }
        }
      ]
    }
  }
}
