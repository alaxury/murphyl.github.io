---
title: 触发器的使用
---

```sql
-- 模拟 YHD 产品编码的生成逻辑
create or replace trigger Generate_Code_Trigger
  before insert on product                        -- 在 insert 动作前触发
  for each row                                    -- 逐行触发
declare
  -- local variables here
  code varchar2(10);
begin
  code      := :new.id || mod(:new.id + 3, 10);   -- 生成编码
  :new.code := to_char(code, '0000000000');       -- 格式化为 10 位并赋值
end Generate_Code_Trigger;
```
