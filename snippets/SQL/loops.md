---
title: 媒体查询
---

```sql
/** oracle pl/sql - 乘法口诀 **/
declare                   -- 定义语句
  a number := 0;           -- 数据初始化
  --b number := 0;
begin 
  for b in 1 .. 9 loop         -- while loop 循环
    --b := b + 1;            -- 自增
    for a in 1 .. b loop
        --a := a + 1;        -- dbms_out.put 将要输出的内容放入缓冲区，to_chan 格式化字符串、日期
        dbms_output.put(a || ' * ' || b || ' = ' || to_char(a * b, '00') || '    ');
    end loop;              -- 结束最近的一次循环
    dbms_output.new_line;  -- 输出缓冲区的内容
    a := 0;
  end loop;
end;
---

---sql
declare                   -- 定义语句
  a number := 0;           -- 数据初始化
  b number := 0;
begin 
  while b < 9 loop         -- while loop 循环
    b := b + 1;            -- 自增
    while a < b loop
        a := a + 1;        -- dbms_out.put 将要输出的内容放入缓冲区，to_chan 格式化字符串、日期
        dbms_output.put(a || ' * ' || b || ' = ' || to_char(a * b, '00') || '    ');
    end loop;              -- 结束最近的一次循环
    dbms_output.new_line;  -- 输出缓冲区的内容
    a := 0;
  end loop;
end;
---
