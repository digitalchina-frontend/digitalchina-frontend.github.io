---
sidebar: auto
---

# Git 中的 Squash 合并

## 背景

在日常工作中，我们经常会使用 MR(对于 gitlab) 或 PR(对于 github) 发起合并请求，对于 Github 上的项目，项目管理员可以在以下三个选项中选择一个作为合并选项：

- `Create a merge commit`：会在主分支上自动生成一个形如：
  `Merge pull request #[...] from [...]` 的 `merge commit` 将两个分支连接在一起，并记录合并冲突涉及到的改动。
- `Squash and merge`：会将功能分支上的所有提交（commit）合并为一个新的提交添加到主分支，而不是将每个提交都添加到主分支的历史记录中。
- `Rebase and merge`：会将功能分支和主分支上的所有提交历史线性地在最近共同祖先处往后重写，线性提交历史有助于代码回滚，但这也意味着主分支对功能分支的引用丢失了。

以上三个选项都能将功能分支代码合并到主分支（main 或者 master）中，这篇文章会简单介绍应该在何时使用 Squash 合并以及如何在本地合并提交。

## 何时使用 Squash

如上所述，Squash 会将多个提交合并为一个新的提交，其中包含来自功能分支的所有更改，这个新的提交不是自动生成的，而是手动输入提交信息后新增的。

### 那么你在什么情况下会考虑使用 Squash 呢？

假设你在一个单独的功能分支上工作，并在这个分支产生了许多提交，随着工作复杂度的增强和时间的流逝，你可能会产生相当多的提交，当你完成工作并准备合并分支时，你可能会希望只在主分支上产生一个提交，此时，你可以使用 Squash 来达成目标。

### 是否应该使用 Squash

使用 Squash 意味着你的多个提交信息不会在主分支上出现，同时你的提交不会包含对功能分支的引用，但好处则是主分支提交历史的井然有序。

总的来说，是否使用 Squash 是一个偏好问题，通常较大、较复杂的合并不应该使用 Squash，而较小的合并则比较适用 Squash。当然，将大型功能分支分解为多个小型功能分支可能更加明智，这对于 `cherry-pick` 提交到别的分支和仓库非常有用。

:::tip 建议
由于 Squash 生成的提交是全新的，不存在于功能分支的历史记录中，因此，建议在合并完成后删除功能分支以防止出现混淆（比如 Squash Merge 后再次对同一分支进行普通 Merge）。
:::

## 怎么在本地合并提交

在本地合并提交有两种比较通用的方式，分别为 Merge 命令和 Rebase 命令，下面一一介绍：

:::tip 注意
没有单独的 `git squash` 命令，相反，`squash` 是执行 `git merge` 命令时的一个选项。
:::

### 方式一：`git merge --squash`

假设现在你的功能分支 `feature/squash-demo` 上有两个提交 `commit 1` 和 `commit 2`：

![feature-branch](/images/git-squash/feature-branch.png)

想要合并两个提交，需要基于不包含这两个提交的分支（通常是主分支）创建一个新的分支：

```sh
git checkout main
git checkout -b pr/squash-demo
```

接着，带上 `--squash` 选项将功能分支合并到这个新分支：

```sh
git merge --squash feature/squash-demo
```

此时，检查工作区和暂存区：

```sh
git status
```

你会发现这两个提交对应的改动出现在了暂存区：
![status.png](/images/git-squash/status.png)

也就是说，`--squash` 选项没有自动生成一个合并的提交，而是在你的暂存区中留下了文件改动，然后你可以自己提交。

```sh
git commit -am "Combine 2 into 1"
```

这样，我们就在新的分支 `pr/squash-demo` 上完成了提交的合并。

![merge-squash](/images/git-squash/merge-squash.png)

### 方式二：`git rebase -i`

现在我们回到具有两个提交 `commit 1` 和 `commit 2` 的功能分支 `feature/squash-demo` 上：

![feature-branch](/images/git-squash/feature-branch.png)

通过交互式 Rebase 命令（`git rebase` 命令的 `-i` 选项）来合并两个提交：

```sh
git rebase -i HEAD~2
```

:::tip
`HEAD~{n}` 表示当前 `HEAD` 指向的提交的前 n 个提交（n >= 0），如果不加这个参数会显示当前分支所有提交。
:::

执行后会打开一个文本编辑器界面，显示了这两次提交的记录和一堆注释，文本编辑器的操作方式类似 [vi/vim](https://www.runoob.com/linux/linux-vim.html)。

![rebasei](/images/git-squash/rebasei.png)

从上图可以看到，在这个编辑器中，你可以编辑 Git 提交历史，比如：你可以删除一个提交，或者你可以重新对提交进行排序；这里我们使用 squash 命令对提交进行合并，注释中对 squash 命令的描述是：“使用提交，但融合到之前的提交中”。

所以，要合并这两个提交，只需要保留第一个提交为 pick 命令，将后续提交改为 squash 命令：

![rebase-squash](/images/git-squash/rebase-squash.png)

保存文本后会再打开一个文本编辑器用于输入合并后的提交信息：

![rebase-message](/images/git-squash/rebase-message.png)

直接在顶部键入提交信息即可，也可以保留或删除之前两个提交的信息：

![rebase-message-complete](/images/git-squash/rebase-message-complete.png)

保存文本，我们就把两个提交合并为了一个新的提交。

![rebase-squash-result](/images/git-squash/rebase-squash-result.png)

## 参考资料

- [Squash, Merge, or Rebase?](https://matt-rickard.com/squash-merge-or-rebase)
- [Merge strategies and squash merge](https://learn.microsoft.com/en-us/azure/devops/repos/git/merging-with-squash?view=azure-devops)
- [How to Squash Commits in Git](https://www.git-tower.com/learn/git/faq/git-squash)
