function kmp(source, pattern) {
    // 1. 求跳转表格，查询自重复，比如abcabcd中，abc出现重复
    let table = new Array(pattern.length).fill(0)
    
    {
        // 为什么 i 从1开始，因为 i 纪录的是自重复的位置，至少是从 1 开始的
        let  i = 1,j = 0

        while(i < pattern.length) {
            if (pattern[i] === pattern[j]) {
                ++j;
                ++i;
                table[i] = j
            } else {
                if (j > 0) {
                    j = table[j]
                } else {
                    ++i
                }
            }
        }
    }

    console.log(table)

    // 2. pattern 字符串和 source字符串匹配

    {
        let i = 0, j = 0
        while(i < source.length) {
            
            if (pattern[j] === source[i]) {
                ++i;
                ++j;
            } else {
                if (j > 0) {
                    j = table[j]
                } else {
                    ++i
                }
            }

            if (j === pattern.length) {
                return true
            }
        }
        return false
    }
}

console.log(kmp("abcabcababcde", "abcdabce"))


