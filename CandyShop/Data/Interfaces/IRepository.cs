using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace Data.Interfaces
{
    public interface IRepository<T>
    {
        T GetId(int id);
        IEnumerable<T> Get();
        IEnumerable<T> Get(Expression<Func<T, bool>> predicate);
        void Add(T entity);
    }
}
