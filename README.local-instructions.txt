Local notes:
- The password-protected archive (backups/backup.zip) should be added.
- DO NOT commit production secrets. Use a throwaway key.
- Test flow:
  1) Add backup.zip to backups/
  2) git add, commit, push
  3) From a fresh clone, verify backups/db_backup.sql.
