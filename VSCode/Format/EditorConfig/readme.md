# [EditorConfig](https://editorconfig.org/)

**语法**：  
- 以「回车换行」/「换行」作为一行的分隔符
- 以 `/` 作为路径分隔符
- 以 `#` / `;` 作为注释

## 一、通配符

| 符号 | 描述 |
| --- | --- |
| `*` | 匹配除 `/` 之外的字符串 |
| `**` | 匹配任意字符串 |
| `?` | 匹配任意单个字符 |
| [name] | 匹配 name 之中的任意一个字符 |
| [!name] | 匹配 name 之外的任意一个字符 |
| {s1, s2, s3} | 匹配给定字符串中的一个 |
| {num1..num2} | 匹配 num1 到 num2 间的一个整数 |

## 二、属性

| 属性 | 描述 |
| --- | --- |
| indent_style | 缩进风格，tab 或 space |
| indent_size | 缩进宽度。如果 indent_style = tab，默认为 tab_width |
| tab_width | 设置 tab 缩进的字符数，默认 indent_size |
| end_of_line | 设置换行符，lf、cr 和 crlf |
| charset | 设置编码 |
| trim_trailing_whitespace | true 表示会去除换行行首的空白字符 |
| insert_final_newline | true 表示文件以空白行结尾 |
| root | 表示是最顶层的配置文件，发现设为 true 时，才会停止查找 .editorconfig 文件 |

